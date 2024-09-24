import "./index.css";

import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function Reviews({ list }) {
  return (
    <div className="reviews__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="reviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="reviews">
      <div className="reviews__firstline">
        <span className="reviews__name">{guestName}</span>
        <span className="reviews__rating">Рейтинг: {rating}</span>
      </div>
      <span className="reviews__text">{review}</span>
    </Box>
  );
}
