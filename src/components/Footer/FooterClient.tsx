import React from "react";

interface FooterType {
  title: string;
  list: {
    titleItem: string;
    svg: string;
    link: string;
  }[];
}

const FooterClient: React.FC<FooterType> = ({ title, list }) => {
  return (
    <div>
      <h3>{title}</h3>
      {list.map((item) => (
        <div className="footer-item">
          {item.svg && <img src={item.svg} />}
          <p>{item.titleItem}</p>
        </div>
      ))}
    </div>
  );
};

export default FooterClient;
