import ContactUsForm from "../components/Forms/ContactUsForm";

function ContactUs() {
  return (
    <section className=" page flex flex-col gap-8 ">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">
          We Are Ready To Serve You Anytime
        </h2>
        <h3 className="text-xl text-gray-500 mt-5">
          Contact us for help, Feedback , Problems
        </h3>
      </div>
      <div className="px-10 mb-28 grow md:self-center">
        <ContactUsForm />
      </div>
    </section>
  );
}

export default ContactUs;
