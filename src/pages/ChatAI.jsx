import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContent,
  clearChat,
  addUserMessage,
} from "../redux/slice/chatSlice";

import userAvater from "../assets/icons/user-avater.svg";
import botAvater from "../assets/icons/bot-icon.png";
import sendIcon from "../assets/icons/send-icon.svg";

const ChatAI = () => {
  const [prompt, setPrompt] = useState("");
  const dispatch = useDispatch();
  const { conversation, isLoading, error } = useSelector((state) => state.chat);

  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const submitBtnRef = useRef(null);

  useEffect(() => {
    // chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  const handleGenerate = () => {
    if (prompt.trim()) {
      dispatch(addUserMessage(prompt));
      dispatch(fetchContent(prompt));
      setPrompt("");
    }
  };

  const handleClearChat = () => {
    dispatch(clearChat());
  };

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      handleGenerate();
    }
  };
  return (
    <div className="flex flex-col justify-end h-screen pt-28 pb-20">
      {/* Chat history */}
      <div className="flex flex-col h-full mx-auto px-5 lg:px-52  min-w-full">
        <div className="overflow-auto">
          <div
            className="bg-slate-100 rounded-lg ai-chat-container my-20"
            ref={chatContainerRef}
          >
            {conversation.map((message, index) => (
              <div key={index} className="mb-4 flex flex-col gap-3">
                <div className="bg-blue-100 p-3 rounded-lg mb-1 self-start w-full lg:w-1/2 flex items-start gap-5">
                  {/* <strong>User:</strong> */}
                  <img
                    src={userAvater}
                    alt="User Avatar"
                    className="w-10 p-1 bg-red-500 rounded-full"
                  />
                  <div className="pt-2 overflow-x-auto">
                    <p>{message.user}</p>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded-lg self-end w-full lg:w-1/2  flex items-start gap-5">
                  <img
                    src={botAvater}
                    alt="Bot Avatar"
                    className="w-10 p-1 bg-sky-300 rounded-full"
                  />
                  <div className="pt-2 overflow-x-auto">
                    <p>{message.ai}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="" ref={chatEndRef} />
          </div>
        </div>
      </div>

      {/* Input and Buttons */}
      <div className="p-5 lg:px-40">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border p-3 rounded-md"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={handleSubmit}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="bg-blue-500 disabled:bg-slate-300 text-white p-3 rounded-md"
            ref={submitBtnRef}
          >
            <img src={sendIcon} className="w-7" alt="" />
          </button>
          <button
            onClick={handleClearChat}
            className="bg-red-500 text-white p-3 rounded-md"
          >
            Clear
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default ChatAI;
