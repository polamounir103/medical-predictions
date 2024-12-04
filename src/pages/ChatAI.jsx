function ChatAI() {
  return (
    <>
      <div className="w-full min-h-svh flex flex-col items-center justify-center">
        <div className="w-full h-full ">
          <iframe
            src="https://www.yeschat.ai/i/gpts-2OTogwefA6-Medical-GPT"
            style={{ width: "100%", height: "85svh" }}

            title="Chatbot"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

          />
        </div>
      </div>
    </>
  );
}

export default ChatAI;
