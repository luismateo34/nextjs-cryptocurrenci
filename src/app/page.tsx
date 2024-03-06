import criptologo from "@/images/criptologo-removebg-preview.png";
import { CardImage } from "@/components/card";
import cardano from "@/images/cardano-blockchain-platform-with-laptop.jpg";
import nft from "@/images/nft.jpg";
import blockchain from "@/images/blockchain-element.png";

export default function Home() {
  return (
    <main className=" min-h-screen  span-y snap-mandatory overflow-x-auto overflow-y-auto scroll-smooth">
      <section className="min-h-screen w-full snap-center flex  flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-2 w-[75vw] h-[75vh] bg-white/10 ">
          <div className="flex flex-col gap-2 items-start justify-evenly col-start-1 col-end-2">
            <h1>crypto market</h1>
            <p>
              Elit convallis tempor pellentesque cras dignissim tempor
              vestibulum nulla, odio nunc lacus id odio convallis nunc sed cras
              ornare, in.
            </p>
          </div>
          <div className="col-start-2 col-end-3">
            <img src={criptologo.src} alt="logo de criptomoneda" />
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full  snap-center flex flex-row items-center justify-around flex-wrap">
        <CardImage image={cardano.src} alt="cardano image">
          <p>
            Ante tempor convallis, dictum ac et amet integer placerat dictumst
            congue rutrum consequat vitae eget.
          </p>
        </CardImage>

        <CardImage image={nft.src} alt="nft image">
          <p>
            Ante tempor convallis, dictum ac et amet integer placerat dictumst
            congue rutrum consequat vitae eget.
          </p>
        </CardImage>
        <CardImage image={blockchain.src} alt="blockchain image">
          <p>
            Ante tempor convallis, dictum ac et amet integer placerat dictumst
            congue rutrum consequat vitae eget.
          </p>
        </CardImage>
      </section>
    </main>
  );
}
