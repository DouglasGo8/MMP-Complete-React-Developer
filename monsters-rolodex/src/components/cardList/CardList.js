import "./CardList.css";

import Card from "../card/Card";
/**
 *
 * @returns
 */
const cardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default cardList;
