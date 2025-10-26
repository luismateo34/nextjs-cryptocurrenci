import { CardImage } from "@/components/card";
import cardano from "@/images/cardano-blockchain-platform-with-laptop.jpg";
import nft from "@/images/nft.jpg";
import blockchain from "@/images/blockchain-element.png";
import { Section } from "@/components/section";
import style from "./card.module.css";

export const CardSection = () => {
  return (
    <Section>
      <div className={style.container}>
        <CardImage
          image={cardano.src}
          route="https://ethereum.org/en/smart-contracts/"
          alt="cardano image"
          className={style.card1}
          nameRoute="smart-contracts"
        >
          <p>
            Ante tempor convallis, dictum ac et amet integer placerat dictumst
            congue rutrum consequat vitae eget.
          </p>
        </CardImage>
        <CardImage
          image={nft.src}
          route="https://es.investing.com/academy/crypto/que-es-un-nft/"
          alt="nft image"
          className={style.card2}
          nameRoute="nft"
        >
          <p>
            Ante tempor convallis, dictum ac et amet integer placerat dictumst
            congue rutrum consequat vitae eget.
          </p>
        </CardImage>
        <CardImage
          image={blockchain.src}
          route="https://www.linkedin.com/pulse/everything-you-need-know-cryptography-blockchain-spydra"
          alt="blockchain image"
          className={style.card3}
          nameRoute="blockchain"
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
