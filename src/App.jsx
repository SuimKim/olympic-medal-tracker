import { useState } from 'react'
import MedalForm from './components/MedalForm';
import ResultTable from './components/ResultTable';
import './App.css'

function App() {

// ------------------------------------------------
// state 할당 --------------------------------------
  const [list, setList] = useState([]);

  let localData = [];
  localStorage.getItem('data') !== null && (localData = JSON.parse(localStorage.data));
  // ------------------------------------------------

  // ------------------------------------------------
  // UI 생성 -----------------------------------------
  return (
    <>
      <h1>Olympic Medal Tracker</h1>

      <main className="main-back">

        <section className="input-back">
          <MedalForm list={list} setList={setList} localData={localData} />
        </section>

        <section className='table-back'>
          <ResultTable list={list} setList={setList} localData={localData}/>
        </section>

      </main>
    </>
  )
}

export default App;




