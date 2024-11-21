// -----------------------------------------------------------------------
// ----------------------Google AI------------------------------------------
import { useState } from "react";
import axios from "axios";

const useChatAI = () => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchContent = async (prompt) => {
    setIsLoading(true);
    setError("");
    setResponse("");

    try {
      const url =
        "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyBMNSBCEP7ilgvXq9fZu7G9hyttrYwuzXA";
      const body = {
        prompt: {
          text: prompt,
        },
        temperature: 0.7,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(url, body, config);
      console.log(prompt);
      console.log(data);
      const generatedText =
        data?.candidates?.[0]?.output || "No content generated.";
      setResponse(generatedText);
    } catch (error) {
      setError(
        error.response?.data?.error?.message ||
          "An error occurred while fetching the content."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    response,
    error,
    isLoading,
    fetchContent,
  };
};

export default useChatAI;
