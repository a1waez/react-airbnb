import "./index.css";
import Heading from "../heading";

export default function Host({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="host">
      <img
        className="host__image"
        src={image}
        alt="Host"
        height={80}
        width={80}
      />

      <div className="host__sub-block">
        <Heading>Господар – {name}</Heading>
        <div className="host__info">
          <span className="host__sub-value">{phone}</span>
          <span className="host__sub-value">{response_time}</span>
          <span className="host__sub-value">
            {response_rate}% percent response rate
          </span>
        </div>
      </div>
      <span className="host__sub">{info}</span>
    </div>
  );
}
