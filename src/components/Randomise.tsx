import React from "react";
import { FaRandom } from "react-icons/fa";
type RandomiseProp = {
  onClick: Function;
};
export const Randomise = (props: RandomiseProp) => {
  return (
    <section className="randomise">
      <div className="randomise__btn">
        <FaRandom className="icon" />
        <button className="btn" onClick={() => props.onClick()}>
          Randomise
        </button>
      </div>
    </section>
  );
};
