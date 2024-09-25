import { useState } from "react";

const DeleteUser = () => {
  const [userID, setUserID] = useState<number | string>("");

  function deleteFn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch("http://localhost:8000/deleteUser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userID }),
    });

    console.log("rodei");
  }

  console.log(userID);

  return (
    <>
      <form action="" onSubmit={deleteFn}>
        <label htmlFor="">delete a user</label>
        <input
          type="number"
          value={userID}
          onChange={(e) => setUserID(Number(e.target.value))}
        />
        <button>delete</button>
      </form>
    </>
  );
};

export default DeleteUser;
