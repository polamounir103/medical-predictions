import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContent,
  clearChat,
  addUserMessage,
} from "../redux/slice/chatSlice";

import sendIcon from "../assets/icons/send-icon.svg";
import { VscClearAll } from "react-icons/vsc";
import axios from "axios";

const Predictions = () => {
  const dispatch = useDispatch();
  const { conversation, isLoading, error, lastReplay, illnessList } =
    useSelector((state) => state.chat);

  const submitBtnRef = useRef(null);
  const [mainSymptoms, setMainSymptoms] = useState([]);
  const [userSymptoms, setUserSymptoms] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [symptomError, setSymptomError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../src/json/symptoms.json");
        setMainSymptoms(response.data);
      } catch (error) {
        console.error("Error fetching symptoms data:", error);
        setSymptomError("Could not load symptoms");
      }
    };
    fetchData();
  }, []);

  const handlePredictChange = (e) => {
    setSymptomError(null);
    const value = e.target.value;
    setInputValue(value);
    const filteredSuggestions = mainSymptoms.filter((symptom) =>
      symptom.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const addSymptom = () => {
    const symptom = inputValue.trim();

    if (!symptom) {
      setSymptomError("Please enter a valid symptom");
      return;
    }

    if (userSymptoms.includes(symptom)) {
      setSymptomError("Symptom already added");
      return;
    }

    setUserSymptoms([...userSymptoms, symptom]);
    setInputValue("");
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.name);
    setSuggestions([]);
  };

  const handleSubmit = () => {
    if (userSymptoms.length === 0) {
      setSymptomError("Please add at least one symptom");
      return;
    }

    const finalPrompt = `I feel ill with the following symptoms: ${userSymptoms.join(
      ", "
    )}. Can you help me diagnose the possible illness I may have? 
    note : I know that you are not medical model but i want the diagnostic as info 
    so provide me only the list of possible illness just the list
    and make your answer exactly like the following build and it is nessessary to make the bulid  :
    "here is the possible list of illness : 

    * example
    * example
    `;

    dispatch(addUserMessage(finalPrompt));
    dispatch(fetchContent(finalPrompt));
    setUserSymptoms([]);
    setSymptomError(null);
  };

  const handleClearChat = () => {
    dispatch(clearChat());
    setUserSymptoms([]);
    setSymptomError(null);
  };

  return (
    <div className="flex flex-col justify-center pt-48 pb-10">
      <div className="flex flex-col justify-center items-center gap-10">
        <div>
          <div
            style={{
              width: "300px",
              margin: "20px auto",
              position: "relative",
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={handlePredictChange}
              placeholder="Enter a symptom"
              className={`w-full border-2 p-3 rounded-md ${
                symptomError ? "border-red-500" : "border-gray-400"
              }`}
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border rounded-md">
                {suggestions.map((symptom, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(symptom)}
                    className="p-2 cursor-pointer hover:bg-gray-100 border-b"
                  >
                    {symptom.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            {userSymptoms.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {userSymptoms.map((symptom, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="p-5 lg:px-40">
          <div className="flex gap-2">
            <button
              onClick={addSymptom}
              disabled={isLoading}
              className="bg-blue-500 disabled:bg-slate-300 text-white p-3 rounded-md w-14 aspect-square"
            >
              ADD
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-blue-500 disabled:bg-slate-300 text-white p-3 rounded-md w-14 aspect-square"
              ref={submitBtnRef}
            >
              <img src={sendIcon} alt="Send" />
            </button>
            <button
              onClick={handleClearChat}
              className="bg-red-500 text-white p-3 rounded-md w-14 aspect-square flex justify-center items-center"
            >
              <VscClearAll className="text-3xl font-bold" />
            </button>
          </div>
        </div>
        <div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {symptomError && <p className="text-red-500 mt-2">{symptomError}</p>}

          {lastReplay && (
            <div className="px-10 flex flex-col gap-2 mt-4">
              <p className="">Here is the possible list of illnesses:</p>
              <ul>
                {illnessList.map((ill, idx) => (
                  <li key={idx}> - {ill}</li>
                ))}
              </ul>
              <p>
                <strong className="block">**Important:**</strong>
                This list is not exhaustive and should not be used for
                self-diagnosis. So see a doctor for accurate diagnosis and
                treatment. These symptoms can be associated with many other
                conditions, and only a medical professional can determine the
                actual cause of your illness.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Predictions;
