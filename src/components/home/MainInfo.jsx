import baymaxImg from "../../assets/images/baymax-hello.png";
function MainInfo() {
  return (
    <section className="main-info-section py-40" id="about">
      <div className="flex flex-col lg:flex-row md:gap-20 lg:gap-0 px-2 items-center justify-center lg:pe-14 xl:pe-40 overflow-hidden">
        <div className="main-info-img-box-container scale-75 xl:scale-100 lg:-translate-x-1/4 order-2 lg:order-1 -rotate-12 lg:rotate-12 ">
          <div className="main-info-img-box">
            <img
              className="-scale-x-100 absolute translate-x-9"
              src={baymaxImg}
              alt="baymax-info"
            />
          </div>
        </div>
        <div className="main-info-text grow flex justify-center w-full items-center lg:-ms-40 xl:-ms-16 order-1 lg:order-2">
          <div className="flex flex-col gap-10 text-center w-full items-center justify-center">
            <h2 className="text-3xl font-semibold">Some Info about Baymax</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              condimentum libero, vel viverra lectus. Morbi vel gravida dolor.
              Nulla facilisi. Donec at neque vel erat pulvinar tempor. Sed nec
              nisl vel erat facilisis tristique. Aliquam erat volutpat. Donec
              vel cursus ex, in consectetur mauris.
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              condimentum libero, vel viverra lectus. Morbi vel gravida dolor.
              Nulla facilisi. Donec at neque vel erat pulvinar tempor. Sed nec
              nisl vel erat facilisis tristique. Aliquam erat volutpat. Donec
              vel cursus ex, in consectetur mauris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainInfo;
