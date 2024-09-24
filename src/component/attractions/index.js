import "./index.css";

import ListItem from "../list-item";
import { Fragment } from "react";
import Heading from "../heading";

export default function Attractions({ list }) {
  return (
    <div className="attractions__details">
      <Heading border>Пам'ятки поблизу</Heading>
      <div className="attractions__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <NearbyAttractions {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function NearbyAttractions({ name, link }) {
  return (
    <div className="attractions__details">
      <ul className="list-item__block">
        <ListItem className="list-item__content">
          <span src={link} className="attractions__text">
            {name}
          </span>
        </ListItem>
      </ul>
    </div>
  );
}
