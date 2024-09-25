import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import NewUser from "./components/NewUser";
import DeleteUser from "./components/DeleteUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="newUser" element={<NewUser />} />
          /*
          <Route path="deleteUser" element={<DeleteUser />} />
          */
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
