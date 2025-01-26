import React from "react";
import MedalItem from "./MedalItem";
import Button from "./Button";
import { useState } from "react";

const MedalTable = ({ list, setList }) => {
  // -----------------------------------------------------------------------
  // list 정렬 --------------------------------------------------------------
  const [sortType, setSortType] = useState("gold"); // 최초 정렬값 셋팅
  // -----------------------------------------------------------------------
  const getSortedMedals = () => {
    if (sortType === "gold") {
      const sortedMedals = list.sort((a, b) => b.gold - a.gold);
      return sortedMedals;
    } else if (sortType === "total") {
      const sortedMedals = list.sort((a, b) => b.total - a.total);
      return sortedMedals;
    } else if (sortType === "country") {
      const sortedMedals = list.sort((a, b) =>
        a.country < b.country ? -1 : 1
      );
      return sortedMedals;
    }
  };
  // -----------------------------------------------------------------------
  const sortedMedals = getSortedMedals(); // 버튼 클릭하면 실행할 함수
  // -----------------------------------------------------------------------
  // list 삭제 --------------------------------------------------------------
  const deleteList = (country) => {
    const deleteList = list.filter((e) => e.country !== country);

    setList(deleteList);

    localStorage.setItem("data", JSON.stringify(deleteList));
  };
  // -----------------------------------------------------------------------
  // UI 생성 ----------------------------------------------------------------
  return (
    <table>
      <thead>
        <tr>
          <th>
            국가명
            <Button
              className={"sort-btn"}
              Children={"▼"}
              onClick={() => setSortType("country")}
            />
          </th>
          <th>
            금메달
            <Button
              className={"sort-btn"}
              Children={"▼"}
              onClick={() => setSortType("gold")}
            />
          </th>
          <th>은메달</th>
          <th>동메달</th>
          <th>
            총합
            <Button
              className={"sort-btn"}
              Children={"▼"}
              onClick={() => setSortType("total")}
            />
          </th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {sortedMedals.length !== 0 ? (
          sortedMedals.map((e) => (
            <MedalItem key={e.country} list={e} deleteList={deleteList} />
          ))
        ) : (
          <tr>
            <td className="none-list-td" colSpan={6}>
              랭킹을 등록해주세요! {/*저장된 값이 없을 때 나타낼 화면*/}
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={6}>🩵 (｡◠‿◠｡) 💙</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default MedalTable;
