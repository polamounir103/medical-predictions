import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import runChat from "../../config/gemini";

export const fetchContent = createAsyncThunk(
  "chat/fetchContent",
  async (prompt, { rejectWithValue }) => {
    try {
      const response = await runChat(prompt);
      return { prompt, response };
    } catch (error) {
      return rejectWithValue("Somthing went wrong. Please try again later.");
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    conversation: [],
    lastReplay: "",
    illnessList: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearChat: (state) => {
      state.conversation = [];
    },
    addUserMessage: (state, action) => {
      state.conversation.push({ user: action.payload, ai: "Loading..." });
    },
    updateAIResponse: (state, action) => {
      const lastMessage = state.conversation[state.conversation.length - 1];
      if (lastMessage && lastMessage.ai === "Loading...") {
        lastMessage.ai = action.payload;
      }
      window.scrollY = window.scroll;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.isLoading = false;
        const lastMessage = state.conversation[state.conversation.length - 1];
        if (lastMessage && lastMessage.ai === "Loading...") {
          lastMessage.ai = action.payload.response;
        }
        state.lastReplay = action.payload.response;
        const phraseToRemove = "Here is the possible list of illnesses: ";
        const formattedReplay = state.lastReplay.replace(phraseToRemove, "");
        state.illnessList = formattedReplay.split("*");
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.lastReplay = "";

        // Handle error for the last message
        const lastMessage = state.conversation[state.conversation.length - 1];
        if (lastMessage && lastMessage.ai === "Loading...") {
          lastMessage.ai = "Sorry Please try again later";
        }
      });
  },
});

export const { clearChat, addUserMessage, updateAIResponse } =
  chatSlice.actions;

export default chatSlice.reducer;
