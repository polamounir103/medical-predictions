// useNotify.js
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom hook to notify
const useNotify = () => {
  const notify = (message, type = "info") => {
    toast(message, {
      type,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return notify;
};

export default useNotify;
