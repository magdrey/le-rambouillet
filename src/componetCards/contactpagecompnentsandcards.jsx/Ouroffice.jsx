import React from "react";
import Map from "../../assets/Map.jpg";
import { officeLocations } from "./ContactCardData";

function Ouroffice() {
  return (
    <div className="Ouroffice">
      <div className="Map">
        <img src={Map} alt="map" />
      </div>
      <div className="officesLoca">
        {officeLocations.map(
          ({ img, address, tel, location, postal }, index) => (
            <div className="office-1" key={index}>
              <div className="office-img">{img}</div>

              <div className="office-text">
                <div className="OFT1 Gilroy-B"> {location}</div>
                <div className="OFT2 Gilroy-M"> {address} </div>
                <div className="OFT3 Gilroy-M"> {postal} </div>
                <div className="OFT4 Gilroy-M"> {tel}</div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Ouroffice;
