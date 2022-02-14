import { useCallback, useEffect, useState } from "react";
import GameItem from "../../moleculs/GameItem";
import { getFeatureGame } from "../../../services/player";
import { GameItemTypes } from "../../../services/data-types";

export default function FeuturedGame() {
  const [gameList, setGameList] = useState([]);
  console.log(gameList);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeatureGame();

    setGameList(data);
  }, [getFeatureGame]);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  const API_IMAGE = process.env.NEXT_PUBLIC_IMG;

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => (
            <GameItem
              id={item._id}
              key={item._id}
              thumbnail={`${API_IMAGE}/${item.thumbnail}`}
              title={item.name}
              category={item.category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
