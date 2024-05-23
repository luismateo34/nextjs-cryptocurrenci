import { CardImage } from "@/components/card";
import cardano from "@/images/cardano-blockchain-platform-with-laptop.jpg";
import nft from "@/images/nft.jpg";
import blockchain from "@/images/blockchain-element.png";
import { Section } from "@/components/section";

export const CardSection = () => {
  return (
    <Section>
    <div className="h-full w-full   grid grid-flow-col grid-rows-3  md:grid-cols-3 md:grid-rows-1 items-center gap-2 justify-items-center ">
      <CardImage
        image={cardano.src}
        route="smartcontract"
        alt="cardano image"
        className=" col-start-1 col-end-2 row-start-1 row-end-2"
      >
        <p>
          Ante tempor convallis, dictum ac et amet integer placerat dictumst
          congue rutrum consequat vitae eget.
        </p>
      </CardImage>

      <CardImage
        image={nft.src}
        route="nft"
        alt="nft image"
        className=" col-start-1 col-end-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2"
      >
        <p>
          Ante tempor convallis, dictum ac et amet integer placerat dictumst
          congue rutrum consequat vitae eget.
        </p>
      </CardImage>
      <CardImage
        image={blockchain.src}
        route="cryptografy"
        alt="blockchain image"
        className=" col-start-1 col-end-2 row-start-3 row-end-4 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2"
      >
        <p>
          Ante tempor convallis, dictum ac et amet integer placerat dictumst
          congue rutrum consequat vitae eget.
        </p>
      </CardImage>
    </div>
    </Section>
  );
};
