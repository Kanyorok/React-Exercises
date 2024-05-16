import { useEffect, useState } from "react";
import "../App.css";

const Mapfilter = () => {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const mapData = () => {
    let numbersLessFive = numbers
      .filter((number) => {
        return number <= 5;
      })
      .map((filtered) => {
        return filtered * filtered;
      });

    setNumbers(numbersLessFive);
    // let filteredData = users.filter((user) => {
    //   return user.id <= 5;
    // });

    // setUsers(filteredData);
  };
  return (
    <div>
      <h1>Map And Filter</h1>

      <div className="card">
        <div className="arranged">
          {users.map((user) => (
            <div className="card-inner" key={user.id}>
              <p>Name: {user.name}</p> ||
              <p>Username: {user.username}</p>
            </div>
          ))}
        </div>
        <div className="arranged">
          {numbers.map((number) => (
            <div className="card-inner" key={number}>
              {number}
            </div>
          ))}
        </div>
        <button onClick={mapData}>See Mapped Array</button>
      </div>
    </div>
  );
};

export default Mapfilter;
