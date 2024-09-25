import {
  ChangeEventHandler,
  FormEventHandler,
  SyntheticEvent,
  useState,
} from "react";

const NewUser = () => {
  interface IData {
    id?: number;
    name: string;
    age: number | string;
    role: string;
  }

  const [data, setData] = useState<IData>({
    name: "",
    age: "",
    role: "",
  });

  function handle(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch("http://localhost:8000/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  console.log(data);

  return (
    <>
      <h1 className="titleUser">create new user</h1>

      <form action="" onSubmit={send}>
        <input
          type="text"
          name="name"
          value={data?.name}
          onChange={handle}
          placeholder="name"
        />

        <br />

        <input
          type="number"
          name="age"
          value={data?.age}
          onChange={handle}
          placeholder="age"
        />
        <br />

        <input
          type="text"
          name="role"
          value={data?.role}
          onChange={handle}
          placeholder="role"
        />
        <br />

        <button>create</button>
      </form>
    </>
  );
};

export default NewUser;
