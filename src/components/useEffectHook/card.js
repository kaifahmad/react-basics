import React from "react";
import "./card.css";

function Card({ props }) {
  //   const { props } = prop;
  //   console.log(props);
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <img
            src="https://source.unsplash.com/600x400/?computer"
            alt="card__image"
            className="card__image"
            width="600"
          />
        </div>
        <div className="card__body">
          <span className="tag tag-blue">{props.username}</span>
          <span className="tag tag-blue">{props.email}</span>
          <span className="tag tag-blue">{props.phone}</span>
          <h4>Name: {props.name}</h4>
          <p>
            <strong>Address : </strong> {props.address.street},{" "}
            {props.address.suite}, {props.address.city}, Zipcode:{" "}
            {props.address.zipcode}
          </p>
        </div>
        <div className="card__footer">
          <div className="user">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className="user__image"
            />
            <div className="user__info">
              <h5>Jane Doe</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
