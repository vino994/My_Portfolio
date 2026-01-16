import { useEffect, useState } from "react";
import "../Styles/Loader.css";
import Profile from "../Assets/profile2.png";

export default function Loader({ onFinish }) {
  const [hide, setHide] = useState(false);
  const [nameText, setNameText] = useState("");
  const [subText, setSubText] = useState("");

  const fullName = "VINOTH SANJEEVI";
  const fullSub = "Frontend • React • MERN";

  useEffect(() => {
    let i = 0;
    let j = 0;

    const nameInterval = setInterval(() => {
      setNameText(fullName.slice(0, i));
      i++;
      if (i > fullName.length) {
        clearInterval(nameInterval);

        const subInterval = setInterval(() => {
          setSubText(fullSub.slice(0, j));
          j++;
          if (j > fullSub.length) clearInterval(subInterval);
        }, 60);
      }
    }, 90);

    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 1000);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(nameInterval);
    };
  }, [onFinish]);

  return (
    <div className={`loader-screen ${hide ? "hide" : ""}`}>
     <div className="loader-center">
  <div className="glow-wrap">
    <img src={Profile} alt="profile" className="loader-img" />
  </div>

  <h1 className="loader-title">
    {nameText.split(" ").map((word, i) => (
      <span key={i} className={word === "SANJEEVI" ? "red" : ""}>
        {word}{" "}
      </span>
    ))}
  </h1>

  <p className="loader-sub">{subText}</p>
</div>

    </div>
  );
}
