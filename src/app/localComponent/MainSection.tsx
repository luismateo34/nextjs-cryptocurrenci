import criptologo from "@/images/criptologo-removebg-preview.png";


export const MainSection = () => {
  return (
    <section className=" min-h-screen w-screen   flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-2 w-[75vw] h-[75vh] bg-white/10 rounded-lg ">
        <div className="flex flex-col gap-2 items-start justify-evenly col-start-1 col-end-2 pl-6">
          <h1 className=" text-xl md:text-3xl lg:text-6xl  font-bold italic text-amber-500">
            Crypto market
          </h1>
          <h2 className="text-base md:text-2xl font-semibold ">
            cryptocurrenci, nft
            <br /> and mode
          </h2>
          <p className=" text-base md:text-xl">
            Elit convallis tempor pellentesque cras dignissim tempor vestibulum
            nulla, odio nunc lacus id odio convallis nunc sed cras ornare, in.
          </p>
        </div>
        <div className="col-start-2 col-end-3">
          <img src={criptologo.src} alt="logo de criptomoneda" />
        </div>
      </div>
    </section>
  );
};
