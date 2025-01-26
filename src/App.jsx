import { useState } from "react";
import MedalForm from "./components/MedalForm";
import MedalTable from "./components/MedalTable";
import "./App.css";

function App() {
  // ------------------------------------------------
  // state 할당 --------------------------------------
  localStorage.getItem("data") === null &&
    localStorage.setItem("data", JSON.stringify([]));

  const [list, setList] = useState(JSON.parse(localStorage.data));
  // ------------------------------------------------

  // ------------------------------------------------
  // UI 생성 -----------------------------------------
  return (
    <>
      <h1>Olympic Medal Tracker</h1>

      <main className="main-back">
        <section className="input-back">
          <MedalForm list={list} setList={setList} />
        </section>

        <section className="table-back">
          <MedalTable list={list} setList={setList} />
        </section>
      </main>
    </>
  );
}

export default App;
