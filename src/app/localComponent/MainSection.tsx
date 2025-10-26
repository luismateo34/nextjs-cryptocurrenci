import { Section } from "@/components/section";
import criptologo from "@/images/criptologo-removebg-preview.png";
import style from "./mainSection.module.css"

export const MainSection = () => {
  return (
    <Section>
      <div className={style.container}>
        <div className={style.container2}>
          <h1 className={style.title}>
            Crypto market
          </h1>
          <h2 className={style.subtitle}>
            cryptocurrenci, nft
            <br />and more
          </h2>
          <p className={style.paragraph}>
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
