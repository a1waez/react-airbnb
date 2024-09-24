import "./index.css";

import ListItem from "../list-item";
import Heading from "../heading";
import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function RoomDetails({ guests, bedrooms, beds, baths }) {
  return (
    <div className="box room__details">
      <Heading border>Деталі властивості:</Heading>

      <ul className="list-item__block">
        <ListItem imageSrc={guest} className="list-item__content">
          <span>{guests} гості</span>
        </ListItem>
        <ListItem imageSrc={bedroom} className="list-item__content">
          <span>{bedrooms} спальня</span>
        </ListItem>
        <ListItem imageSrc={bed} className="list-item__content">
          <span>{beds} ліжко</span>
        </ListItem>
        <ListItem imageSrc={bathroom} className="list-item__content">
          <span>{baths} ванна кімната</span>
        </ListItem>
      </ul>
    </div>
  );
}
