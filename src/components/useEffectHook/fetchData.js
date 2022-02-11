import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

function FetchData() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res);
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data.map((sData) => (
        <Card key={sData.id} props={sData} />
      ))}
    </>
  );
}

export default FetchData;
