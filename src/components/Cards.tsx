import React from "react";

export default function Cards(data: any) {
  return (
    <div className="card">
      <div className="card__stats">
        <h1 className="name">{data.data.name}</h1>
        <div className="stats">
          <span className="attack">
            <div>{data.data.stats[1].base_stat}</div>
            <h1>Attack</h1>
          </span>
          <span className="defence">
            <div>{data.data.stats[2].base_stat}</div>
            <h1>Defence</h1>
          </span>
        </div>
        <div className="type">
          {data.data.types.map((typedata: any, index: number) => {
            return <span className="types">{typedata.type.name}</span>;
          })}

          {/* <span className="types">Grass</span> */}
        </div>
      </div>
      <div className="card__img">
        <img
          src={data.data.sprites.other.dream_world.front_default}
          alt="pokemon"
          className="card__img--1"
        ></img>
      </div>
    </div>
  );
}
