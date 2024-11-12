function ContactUsForm() {
  return (
    <form className="flex flex-col gap-5 contact-us-form ">
      <div className="flex gap-5 flex-col md:flex-row">
        <input
          type="text"
          placeholder="Enter Your Full Name"
          className="py-2 px-4 grow h-14 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="py-2 px-4 grow h-14 border rounded-lg"
        />
      </div>
      <textarea name="" id="" className="p-5 border rounded-lg h-52" placeholder="Enter your messege here" />
      <button
        type="submit"
        className="bg-sky-600 text-xl px-10 py-3 rounded-3xl text-white font-semibold"
      >
        Send
      </button>
    </form>
  );
}

export default ContactUsForm;
