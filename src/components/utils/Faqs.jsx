import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "HOW TRANSACTIONS CAN BE PERFORMED?",
      content: `Transactions in Povo can be made with a variety of digital funds. This include your crypto currencies, NFT tokens. You can purchase Povo tokens with fiat currency or swap with other crypto assets, as well.`,
    },
    {
      title: "HOW CROSS CHAIN FUNCTIONALITIES WORK?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "WHAT IS MULTIVERSE USE CASE IN BLOCKCHAIN GAME?",
      content: `Multiverses can be used in gaming as an advanced feature to enter in parallel universes to explore new area and levels within the game. `,
    },
    {
      title: "IS THERE ANY LIMIT IN FUND WITHDRAWAL?",
      content:
        "Generally, there is not limit implied on withdrawal of your funds with Povo. You can withdrawal at any time and for any amount.",
    },
    {
      title: "I HAVE RECEIVED POVO CARD, WHAT TO DO NEXT?",
      content: `Now that you have your Povo card, you can unlock NFT’s exclusive farms. You can mint NFTs or liquidate your Povo cards at any time or swap them with other crypto assets.`,
    },
    {
      title: "How can I add a token to PorkSwap?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
      Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
      Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
      Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What tokens will be available for leveraged trading?",
      content: (
        <ul>
          <li>Compatible Wallet</li>
          <li>Povo extension </li>
          <li>Required some BNB/Eth or TEX for tranction</li>
        </ul>
      ),
    },
    {
      title: "NFTs copyrights",
      content: (
        <ul>
          <li>We have partnered with various artists</li>
          <li>
            We are digitalizing gaming assets like hammer, shovel, boxes etc,
            with unique characteristics
          </li>
          <li>
            These assets are generated by users and licensed under POVO NFTs
          </li>
          <li>User can sell these NFTs (gaming assets) in market place.</li>
        </ul>
      ),
    },
  ],
};

const styles = {
  rowTitleTextSize: "20px",
  titleTextColor: "#FFFFFF",
  rowTitleColor: "#FFFFFF",
  arrowColor: "#FFFFFF",

  bgColor: "#FFFFFF",
  rowContentColor: "#FFFFFF",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const Faqs = () => {
  ////////////////   EXPAND FAQS   ////////////////////////////

  const [rows, setRowsOption] = useState(null);

  useEffect(() => {
    if (rows) {
      setTimeout(() => {
        rows[0].expand();
      }, 2500);

      setTimeout(() => {
        rows[0].close();
      }, 555555000);

      setTimeout(() => {
        rows[0].scrollIntoView();
        // rows[0].scrollIntoView(true);
      }, 10000);
    }
  }, [rows]);

  /////////////////////////////////////////////////////

  return (
    <div className="faq-section py-5">
      <div className="container">
        <div className="row">
          <h1 className="fw-bold text-center py-5 text-white">FAQs</h1>
        </div>
        <div className="row">
          <Faq
            data={data}
            styles={styles}
            config={config}
            getRowOptions={setRowsOption}
          />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
