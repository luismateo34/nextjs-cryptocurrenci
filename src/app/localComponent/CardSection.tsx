import { CardImage } from "@/components/card";
import cardano from "@/images/cardano-blockchain-platform-with-laptop.jpg";
import nft from "@/images/nft.jpg";
import blockchain from "@/images/blockchain-element.png";
import { Section } from "@/components/section";

export const CardSection = () => {
  return (
    <Section>
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
    </Section>
  );
};
