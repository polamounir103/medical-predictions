import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContent,
  clearChat,
  addUserMessage,
} from "../redux/slice/chatSlice";

import sendIcon from "../assets/icons/send-icon.svg";
import { VscClearAll } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { IoSend } from "react-icons/io5";
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
  const addNewSymptom = (event) => {
    if (event.key === "Enter") {
      addSymptom();
    }
  };

  const handleDeleteSymptom = (index) => {
    setUserSymptoms(userSymptoms.splice((index, 1)))
  }
  const hideSuggestion=()=>{
    setSuggestions([]);
  }
  return (
    <div className="flex flex-col pt-48 pb-10 px-5 lg:px-20 min-h-svh">
      <div className="flex flex-col justify-center items-center gap-10 w-full">
        <div className="grid gap-10 grid-cols-8 w-full">
          <div className="relative col-span-8 lg:col-span-4 flex flex-col gap-2 grow w-full">
            <h2 className="text-xl font-semibold">Enter Symptoms here</h2>
            <input
              type="text"
              value={inputValue}
              onChange={handlePredictChange}
              onKeyUp={addNewSymptom}
              placeholder="Enter a symptom"
              className={`grow w-full  border-2 p-3 rounded-md ${
                symptomError ? "border-red-500" : "border-gray-400"
              }`}
            />

            {suggestions.length > 0 && (
              <ul className="absolute top-20 z-10 w-full h-96 bg-white border rounded-md overflow-y-auto">
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

            <div className="w-full flex flex-col gap-4 mt-5">
              <div className="flex gap-2 justify-between w-full">
                <button
                  onClick={addSymptom}
                  disabled={isLoading}
                  className="bg-green-600 disabled:bg-slate-300 text-white p-3 rounded-full w-14 aspect-square flex items-center justify-center text-2xl"
                >
                  <IoMdAdd />
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-blue-500 disabled:bg-slate-300 text-white p-3 rounded-full w-14 aspect-square flex items-center justify-center text-2xl"
                  ref={submitBtnRef}
                >
                  <IoSend />
                </button>
                <button
                  onClick={handleClearChat}
                  className="bg-red-500 disabled:bg-slate-300 text-white p-3 rounded-full w-14 aspect-square flex justify-center items-center text-2xl font-bold"
                >
                  <VscClearAll className="" />
                </button>
              </div>

              {symptomError && (
                <p className="text-red-500 mt-2"> 🚫 {symptomError}</p>
              )}
            </div>
          </div>
          <div className="col-span-8 lg:col-span-4 flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Here is your Symptoms</h2>
            <div className="border border-gray-400 min-h-20 w-full p-5 rounded-md">
              {userSymptoms.length > 0 && (
                <ul className="mb-4 flex flex-wrap gap-2 w-full justify-start items-start">
                  {userSymptoms.map((symptom, index) => (
                    <li
                      key={index}
                      className="bg-blue-100 text-blue-800 px-5 py-1 rounded-full text-sm relative pe-10"
                    >
                      {symptom}

                      <button
                        className=" absolute end-3 top-1/2 -translate-y-1/2"
                        onClick={() => handleDeleteSymptom(index)}
                      >
                        x
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div>
          {error && <p className="text-red-500 mt-2">{error}</p>}

          {lastReplay && (
            <div className=" flex flex-col gap-5 mt-4">
              <p className="text-2xl font-semibold">
                Here is the possible list of illnesses:
              </p>
              <ul>
                {illnessList.map(
                  (ill, idx) => idx !== 0 && <li key={idx}>- {ill}</li>
                )}
              </ul>
              <p className="flex flex-col gap-2">
                <strong className="block text-3xl"> ⚠️ Important ⚠️</strong>
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
