import baymaxImg from "../../assets/images/baymax-hello.png";
function MainInfo() {
  return (
    <section className="main-info-section pt-14" id="about">
      <div className="flex flex-col md:flex-row gap-20 px-2 items-center justify-center">
        <div className="main-info-text grow flex justify-center w-full  items-center">
          <div className="flex flex-col gap-10 text-centerw-full items-center justify-center">
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
