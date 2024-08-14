import { Section } from "@/components/section";
import criptologo from "@/images/criptologo-removebg-preview.png";

export const MainSection = () => {
  return (
    <Section>
      <div className="grid grid-cols-2 gap-2 w-[75vw] h-[75vh] bg-white/5 rounded-lg backdrop-grayscale-0 backdrop-blur-sm shadow-2xl shadow-violet-600/80 brightness-125">
        <div className="flex flex-col items-start gap-4  col-start-1 col-end-2 pl-6 pt-3 ">
          <h1 className=" text-xl md:text-3xl lg:text-6xl  font-bold italic text-amber-500">
            Crypto market
          </h1>
          <h2 className="text-base md:text-2xl font-semibold ">
            cryptocurrenci, nft
            <br /> and more
          </h2>
          <p className=" text-base lg:text-xl text-amber-400 flex flex-col h-1/3   ">
            Elit convallis tempor pellentesque cras dignissim tempor vestibulum
            nulla, odio nunc lacus id odio convallis nunc sed cras ornare, in.
          </p>
        </div>
        <div className="col-start-2 col-end-3">
          <img src={criptologo.src} alt="logo de criptomoneda" />
        </div>
      </div>
    </Section>
  );
};
