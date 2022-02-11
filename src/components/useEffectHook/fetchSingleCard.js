import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import Input from "./input";

function FetchSingleCard() {
  const [data, setdata] = useState({
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  });
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        // console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const liftID = (value = 1) => {
    setId(value);
  };

  //   console.log(data);
  return (
    <>
      <Input onChange={liftID} />
      <Card props={data}></Card>
    </>
  );
}

export default FetchSingleCard;
