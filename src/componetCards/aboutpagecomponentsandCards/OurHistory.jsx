import React from "react";
import Abtimg2s from "../../assets/Abtimg2.jpg";
import Abtimg2 from "../../assets/AbtimgC2.png";

function OurHistory() {
  return (
    <div className="About-1">
      <div className="Aboutus-img abt-lev2-img">
        <img className="imgsm" src={Abtimg2s} alt="img" />
        <img className="imgbg" src={Abtimg2} alt="img" />
      </div>
      <div className="Aboutus-text abt-lev2-text">
        <p className="AbtText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          accumsan urna eros, fermentum pellentesque. Faucibus sit ut tincidunt
          eros nec vitae sit donec sit. Quis turpis sagittis consectetur
          ultricies est arcu laoreet. Molestie lectus scelerisque sit turpis
          enim quam duis. Volutpat at malesuada lectus vel risus tincidunt
          sodales amet, morbi. Est rutrum lorem placerat iaculis proin.
        </p>
        <p className="AbtText">
          Vel tempus, risus sed et habitasse quam lectus. Auctor nec, consequat
          faucibus mi odio eget. Et, posuere augue scelerisque morbi est sit
          quis. Nam nulla sit dignissim vitae pellentesque dolor tincidunt
          consequat cursus. Odio lacus aliquam tellus sociis. Cursus neque,
          nulla mattis amet est mattis.
          <br />
          Dolor eget egestas massa varius feugiat sollicitudin facilisis lacus.
          Et metus eget gravida fusce augue ut.
        </p>
      </div>
    </div>
  );
}

export default OurHistory;
