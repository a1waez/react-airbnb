import "./index.css";

import ListItem from "../list-item";
import Heading from "../heading";

export default function Properties({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkin_instructions,
}) {
  return (
    <div className="room__details">
      <Heading border>Додаткові властивості</Heading>

      <ul className="list-item__block">
        <ListItem title="Правила дому" className="list-item__content">
          <span>{house_rules}</span>
        </ListItem>
        <ListItem title="Політика скасування" className="list-item__content">
          <span>{cancellation_policy}</span>
        </ListItem>
        <ListItem title="Місцевий транспорт" className="list-item__content">
          <span>{local_transportation}</span>
        </ListItem>
        <ListItem title="Мови хоста" className="list-item__content">
          <span>{host_languages}</span>
        </ListItem>
        <ListItem title="Спеціальні пропозиції:" className="list-item__content">
          <span>{special_offers}</span>
        </ListItem>
        <ListItem
          title="Інструкції щодо реєстрації"
          className="list-item__content"
        >
          <span>{checkin_instructions}</span>
        </ListItem>
      </ul>
    </div>
  );
}
