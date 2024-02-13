import React from "react";
import chestImg from "../images/Workout/chest.jpg";
import backImg from "../images/Workout/back.jpg";
import bicepsImg from "../images/Workout/biceps.jpg";
import tricepsImg from "../images/Workout/triceps.jpg";
import absImg from "../images/Workout/abs.jpg";
import legsImg from "../images/Workout/legs.jpg";
import "./Workout.css";

export default function Workout() {
  return (
    <div className="workout">
      <div className="workout__item">
        <img src={chestImg} alt="chest muscles" />
        <h3>Развитие мощных грудных мышц</h3>
      </div>
      <div className="workout__item">
        <img src={backImg} alt="back muscles" />
        <h3>Сделай огромную спину</h3>
      </div>
      <div className="workout__item">
        <img src={bicepsImg} alt="biceps" />
        <h3>Тренировка на бицепсы</h3>
      </div>
      <div className="workout__item">
        <img src={tricepsImg} alt="triceps" />
        <h3>Тренировка на трицепсы</h3>
      </div>
      <div className="workout__item">
        <img src={absImg} alt="abs" />
        <h3>Сделай мощный пресс</h3>
      </div>
      <div className="workout__item">
        <img src={legsImg} alt="legs" />
        <h3>Секрет сильных ног</h3>
      </div>
    </div>
  );
}
