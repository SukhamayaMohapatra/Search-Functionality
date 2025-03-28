import React, { useEffect, useState } from "react";

const Users = ({ query }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((ans) => ans.json())
      .then((result) => setData(result));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const userData = data ? (
    data
      .filter((e) => e.title.toLowerCase().includes(query))
      .map((e) => (
        <div className="d-inline-flex">
          <div className="card" key={e.id} style={{ width: "18rem" }}>
            <img src={e.image} className="card-img-top" alt={e.title} />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">{e.escription}</p>
            </div>
          </div>
        </div>
      ))
  ) : (
    <p>No Data</p>
  );
  return <>{userData}</>;
};

export default Users;
