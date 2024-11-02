// import React from "react";
import alternativa from "../../assets/images-logo-partners/alternativa.webp";
import avertum from "../../assets/images-logo-partners/avertum.webp";
import bekker from "../../assets/images-logo-partners/bekker.webp";
import biol from "../../assets/images-logo-partners/biol.webp";
import blocker from "../../assets/images-logo-partners/blocker.webp";
import branq from "../../assets/images-logo-partners/branq.webp";
import giaretti from "../../assets/images-logo-partners/giaretti.webp";
import inGreeen from "../../assets/images-logo-partners/inGreeen.webp";
import kalitva from "../../assets/images-logo-partners/kalitva.webp";
import katun from "../../assets/images-logo-partners/katun.webp";
import kukmara from "../../assets/images-logo-partners/kukmara.webp";
import lepse from "../../assets/images-logo-partners/lepse.webp";
import littleAngel from "../../assets/images-logo-partners/little-angel.webp";
import luminarc from "../../assets/images-logo-partners/luminarc.webp";
import lysEmal from "../../assets/images-logo-partners/lys-emal.webp";
import martika from "../../assets/images-logo-partners/martika.svg";
import miessa from "../../assets/images-logo-partners/miessa.webp";
import nmp from "../../assets/images-logo-partners/nmp.webp";
import plasticCentre from "../../assets/images-logo-partners/plastic-centre.webp";
import plasticRespublic from "../../assets/images-logo-partners/plastic-respublic.webp";
import polimerbyt from "../../assets/images-logo-partners/polimerbyt.webp";
import scovo from "../../assets/images-logo-partners/scovo.webp";
import supra from "../../assets/images-logo-partners/supra.webp";
import svip from "../../assets/images-logo-partners/svip.webp";

export const partners = [
  {
    id: 1,
    title: "Альтернатива",
    image: alternativa,
  },
  {
    id: 2,
    title: "Авертум",
    image: avertum,
  },
  {
    id: 3,
    title: "Bekker",
    image: bekker,
  },
  {
    id: 4,
    title: "Биол",
    image: biol,
  },
  {
    id: 5,
    title: "Блокер",
    image: blocker,
  },
  {
    id: 6,
    title: "Branq",
    image: branq,
  },
  {
    id: 7,
    title: "Giaretti",
    image: giaretti,
  },
  {
    id: 8,
    title: "inGreeen",
    image: inGreeen,
  },
  {
    id: 9,
    title: "Калитва",
    image: kalitva,
  },
  {
    id: 10,
    title: "Катунь",
    image: katun,
  },
  {
    id: 11,
    title: "Кукмара",
    image: kukmara,
  },
  {
    id: 12,
    title: "Лепсе",
    image: lepse,
  },
  {
    id: 13,
    title: "Little Angel",
    image: littleAngel,
  },
  {
    id: 14,
    title: "Luminarc",
    image: luminarc,
  },
  {
    id: 15,
    title: "Лысьвенские эмали",
    image: lysEmal,
  },
  {
    id: 16,
    title: "Martika",
    image: martika,
  },
  {
    id: 17,
    title: "MiEssa",
    image: miessa,
  },
  {
    id: 18,
    title: "Нева Металл Посуда",
    image: nmp,
  },
  {
    id: 19,
    title: "Plastic Centre",
    image: plasticCentre,
  },
  {
    id: 20,
    title: "Plastic Respublic",
    image: plasticRespublic,
  },
  {
    id: 21,
    title: "Полимербыт",
    image: polimerbyt,
  },
  {
    id: 22,
    title: "Scovo",
    image: scovo,
  },
  {
    id: 23,
    title: "Supra",
    image: supra,
  },
  {
    id: 24,
    title: "Svip",
    image: svip,
  },
];

const Partners = () => {
  return (
    <div className="partners">
      <h2>Работаем только с крупнейшими и надежными производителями</h2>
      <div className="partners-container">
        <div className="partners-track">
          {partners.map((item) => (
            <div className="partner-item ">
              {" "}
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
        <div className="partners-track">
          {partners.map((item) => (
            <div className="partner-item ">
              {" "}
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
