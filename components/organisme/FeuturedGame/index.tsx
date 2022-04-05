import GameItem from "../../moleculs/GameItem";
import { GameItemTypes } from "../../../services/data-types";

interface FeaturedGameProps {
  gameList: GameItemTypes[];
}

export default function FeuturedGame({ gameList }: FeaturedGameProps) {
  const API_IMAGE = process.env.NEXT_PUBLIC_IMG;

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-5 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item) => (
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
