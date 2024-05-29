import "./other.css";

export default function Other() {
  return (
    <>
      <article>
        <h1>Cryptocurrencies: A Look at the Digital Currency of the Future</h1>
        <p>
          Cryptocurrencies have burst onto the financial scene in recent years,
          generating great interest and controversy in equal measure. It is a
          type of digital currency that uses cryptography to secure transactions
          and control the creation of additional units. Unlike traditional
          currencies, cryptocurrencies are not subject to any central government
          or financial institution, but operate on a decentralized network
          called a <a href="#blockchain">blockchain</a>
        </p>
        <h2>Characteristics</h2>

        <p>
          Cryptocurrencies have a number of characteristics that differentiate
          them from traditional currencies:
        </p>

        <div className="container">
          <ul>
            <li>
              Decentralization: They are not subject to any central government
              or financial institution
            </li>
            <li>Security: Transactions are secured by cryptography</li>
            <li>
              Transparency: All transactions are public and visible to all
              participants in the network
            </li>
            <li>
              Immutability: Once a transaction is recorded, it cannot be
              reversed
            </li>
            <li>
              Pseudonymity: Transactions are associated with wallet addresses,
              not with real identities
            </li>
          </ul>
        </div>
        <h2>How do cryptocurrencies work?</h2>
        <p id="blockchain">
          Blockchain technology is the foundation of how cryptocurrencies work.
          This technology is based on a public and distributed ledger of all
          transactions that are made with a certain cryptocurrency. This
          registry is immutable and transparent, which means that all
          participants in the network can see all transactions. To make a
          cryptocurrency transaction, a digital wallet is needed. This wallet
          stores the cryptographic keys that allow the user to send and receive
          cryptocurrencies. Transactions are verified and validated by the nodes
          of the network, which are computers that run the cryptocurrency
          software.
        </p>
      </article>
    </>
  );
}
