import React, { useState } from "react";
import "./Roadmap.css";
// import {Timeline} from 'react-beautiful-horizontal-timeline';
import { Timeline } from "./Timeline";
// import '../../node_modules/react-beautiful-horizontal-timeline/card.css';

function Roadmap() {
  const myList = [
    {
      s: "Project concept ",
      t: "Tokenomics design",
      u: "Website development",
      v: "Smart contract preperation",
      w: "Game development",
    },
    {
      s: "Presale of $CHEESE token",
      t: "CoinMarketCap Listing - fasttrack",
      u: "CoinGecko Listing - fasttrack",
    },
    {
      s: "MyCryptoCheckout Listing",
      t: "RatMaze V1",
      u: "Airdrop Events",
    },
    {
      s: "P2E Feature",
      t: "CEX listing",
      u: "Charity Event",
    },
  ];

  const [labelWidth, setlabelWidth] = useState(140);
  const [amountMove, setamountMove] = useState(120);
  const [lineColor, setlineColor] = useState("#61dafb");
  const [darkMode, setdarkMode] = useState(true);
  const [eventTextAlignCenter, seteventTextAlignCenter] = useState(true);
  const [showSlider, setshowSlider] = useState(false);
  const [arrowsSize, setarrowsSize] = useState(false);

  return (
    <div className="roadmap" id="roadmap">
      <div className="roadmap_title">
        <h1>ROADMAP</h1>
      </div>
      <Timeline
        myList={myList}
        labelWidth={labelWidth}
        amountMove={amountMove}
        lineColor={lineColor}
        darkMode={darkMode}
        eventTextAlignCenter={eventTextAlignCenter}
        showSlider={showSlider}
        arrowsSize={arrowsSize}
      />
    </div>
  );
}

export default Roadmap;
