import React from "react";
import { useState } from "react";
import Button from "./Button";

const MedalForm = ({ list, setList }) => {
  // state 할당 -------------------------------------------------------------
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");
  // -----------------------------------------------------------------------
  // 리스트 추가 --------------------------------------------------------------
  const addList = (e) => {
    e.preventDefault();

    const existingMedal = list.find((list) => list.country === country);

    if (existingMedal) {
      alert("이미 저장된 국가입니다.");
      return;
    }

    const newList = {
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
      total: parseInt(gold) + parseInt(silver) + parseInt(bronze),
    };

    setList([...list, newList]);

    localStorage.setItem("data", JSON.stringify([...list, newList]));

    resetForm();
  };
  // 리스트 수정 --------------------------------------------------------------
  const updateList = (country) => {
    if (!country.trim() || !gold.trim() || !silver.trim() || !bronze.trim()) {
      alert("모든 항목을 입력하세요!");
      return;
    }
    const existingMedal = list.find((list) => list.country === country);

    if (!existingMedal) {
      alert("저장되지 않은 국가입니다.");
      return;
    }

    const updatedList = list.map((a) => {
      return a.country === country
        ? {
            country: a.country,
            gold: gold,
            silver: silver,
            bronze: bronze,
            total: parseInt(gold) + parseInt(silver) + parseInt(bronze),
          }
        : a;
    });
    setList(updatedList);

    localStorage.setItem("data", JSON.stringify(updatedList));

    resetForm();
  };
  // -----------------------------------------------------------------------
  // reset form ------------------------------------------------------------
  const resetForm = () => {
    setCountry("");
    setGold("");
    setSilver("");
    setBronze("");
  };
  // -----------------------------------------------------------------------
  // UI 생성 ----------------------------------------------------------------
  return (
    <>
      <form onSubmit={addList}>
        <div className="item-box">
          <p className="country-label">국가명</p>
          <input
            placeholder="국가명을 입력하세요!"
            type="text"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            className="country-input"
            required
          />
          {/* --------------------------------------------- */}
          <p className="gold-label">금메달</p>
          <input
            placeholder="금메달 갯수를 입력하세요!"
            type="number"
            value={gold}
            onChange={(e) => {
              setGold(e.target.value);
            }}
            className="gold-input"
            min={0}
            required
          />
          {/* --------------------------------------------- */}
          <p className="silver-label">은메달</p>
          <input
            placeholder="은메달 갯수를 입력하세요!"
            type="silver"
            value={silver}
            onChange={(e) => {
              setSilver(e.target.value);
            }}
            className="silver-input"
            min={0}
            required
          />
          {/* --------------------------------------------- */}
          <p className="bronze-label">동메달</p>
          <input
            placeholder="동메달 갯수를 입력하세요!"
            type="number"
            value={bronze}
            onChange={(e) => {
              setBronze(e.target.value);
            }}
            className="bronze-input"
            min={0}
            required
          />
          {/* --------------------------------------------- */}
          <Button className="add-btn" type="submit" Children={"등록하기"} />
          <Button
            className="update-btn"
            type="button"
            onClick={() => updateList(country)}
            Children={"수정하기"}
          />
        </div>
      </form>
    </>
  );
};

export default MedalForm;
