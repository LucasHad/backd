import React, { useEffect, useState } from "react";

const Main = () => {
  interface UserI {
    id?: number;
    name: string;
    age: number;
    role: string;
  }

  const [user, setUser] = useState<null | UserI[]>(null);

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  console.log(user);

  return (
    <>
      {user?.map((item) => {
        return (
          <div key={item.id}>
            <h1>id: {item.id}</h1>
            <h1>name: {item.name}</h1>
            <h1>age: {item.age}</h1>
            <h1>role: {item.role}</h1>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Main;
