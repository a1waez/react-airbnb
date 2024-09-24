import "./index.css";

import ListItem from "../list-item";
import Heading from "../heading";
import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import car from "./car.svg";
import pets from "./pets.svg";
import airport from "./airport.svg";
import service from "./service.svg";
import roomService from "./roomService.svg";
import kids from "./kids.svg";

export default function Comfortables({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasFreeParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <div className="box--shadow comfortables__details">
      <Heading border>Зручності</Heading>

      <ul className="list-item__block">
        <ListItem imageSrc={pool} className="list-item__content">
          {hasPool && (
            <span className="comfortables__text title__sub-value">Басейн</span>
          )}
        </ListItem>
        <ListItem imageSrc={gym} className="list-item__content">
          {hasGym && (
            <span className="comfortables__text title__sub-value">
              Спортивний зал
            </span>
          )}
        </ListItem>
        <ListItem imageSrc={breakfast} className="list-item__content">
          {hasFreeBreakfast && (
            <span className="comfortables__text title__sub-value">
              Безкоштовний сніданок
            </span>
          )}
        </ListItem>
        <ListItem imageSrc={wifi} className="list-item__content">
          {hasFreeWiFi && (
            <span className="comfortables__text title__sub-value">
              Безкоштовний Wi-Fi
            </span>
          )}
        </ListItem>
        <ListItem imageSrc={car} className="list-item__content">
          {hasFreeParking && (
            <span className="comfortables__text title__sub-value">
              Безкоштовний вуличний паркінг
            </span>
          )}
        </ListItem>
        <ListItem imageSrc={pets} className="list-item__content">
          {hasPetsAllowed && (
            <span className="comfortables__text title__sub-value">
              Дозволено розміщення з домашніми тваринами
            </span>
          )}
        </ListItem>
        <ListItem imageSrc={airport} className="list-item__content">
          {hasAirportShuttle && (
            <span className="comfortables__text title__sub-value">
              Транспорт до/з аеропорту
            </span>
          )}
        </ListItem>
        <ListItem imageSrc={service} className="list-item__content">
          {hasConciergeService && (
            <span className="comfortables__text title__sub-value">
              Консьєрж-сервіс
            </span>
          )}
        </ListItem>
        <ListItem imageSrc={roomService} className="list-item__content">
          {hasRoomService && (
            <span className="comfortables__text title__sub-value">
              Обслуговування номерів
            </span>
          )}
        </ListItem>
        <ListItem imageSrc={kids} className="list-item__content">
          {hasChildFriendly && (
            <span className="comfortables__text title__sub-value">
              Підходить для дітей
            </span>
          )}
        </ListItem>
      </ul>
    </div>
  );
}
