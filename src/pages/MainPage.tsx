import React, { useEffect } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Randomise } from "../components/Randomise";
import { URL } from "../constant/constant";
import { getReq } from "../services/methods";

export default function MainPage() {
  const [state, setstate] = React.useState<Boolean>(false);
  const [poke, setPoke] = React.useState<Array<any>>([]);
  const [offset, setOffset] = React.useState(0);

  const getData = async () => {
    getReq(URL + `pokemon?limit=50&offset=${offset}`).then(async (res: any) => {
      await Promise.all(
        res.results.map((pokemonItem: any) => {
          return getReq(URL + "pokemon/" + pokemonItem.name).then(
            (res: any) => {
              setPoke((data) => [...data, res]);
            }
          );
        })
      ).finally(() => {
        setstate(true);
      });
    });
  };
  const Randomize = () => {
    setstate(false);
    setPoke([]);
    setOffset((da) => da + 50);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <Header />
      <Randomise onClick={Randomize} />
      {state ? (
        <section className="cardlist">
          {!poke.length && <div>NOT FOUND</div>}
          {poke.map((data, index) => (
            <Cards data={data} key={index}></Cards>
          ))}
        </section>
      ) : (
        <Loader />
      )}
    </div>
  );
}
