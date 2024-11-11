import ContactUsForm from "../components/Forms/ContactUsForm";

function ContactUs() {
  return (
    <section className="flex justify-center items-center flex-col gap-10 py-24 page">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">
          We Are Ready To Serve You Anytime
        </h2>
        <h3 className="text-xl text-gray-500 mt-5">
          Contact us for help, Feedback , Problens
        </h3>
      </div>
      <ContactUsForm />
    </section>
  );
}

export default ContactUs;
