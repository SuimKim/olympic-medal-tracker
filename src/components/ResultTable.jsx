import React from 'react'
import ResultList from './ResultList';
import Button from './Button';
import { useState } from 'react';

const ResultTable = ({ setList }) => {

    let localData = [];
    localStorage.getItem('data') !== null && (localData = JSON.parse(localStorage.data));
    // -----------------------------------------------------------------------
    // sort 리스트 선언 ---------------------------------------------------------
    let goldSortList = [...localData]
    let totalSortList = [...localData]
    let countrySortList = [...localData]

    goldSortList = goldSortList.sort((a, b) => b.gold - a.gold);
    totalSortList = totalSortList.sort((a, b) => b.total - a.total);
    countrySortList = countrySortList.sort((a, b) => a.country < b.country ? -1 : 1);
    // -----------------------------------------------------------------------
    // list 정렬 --------------------------------------------------------------
    const sortList = (baseList) => {
        return baseList.map((e) => <ResultList key={e.country} list={e} deleteList={deleteList} />);
    }
    // -----------------------------------------------------------------------
    // list 삭제 --------------------------------------------------------------
    const deleteList = (country) => {
        const deleteList = localData.filter((e) => e.country !== country);

        setList(deleteList);

        localData = deleteList;
        localStorage.setItem('data', JSON.stringify(localData));
    }
    // list 생성 --------------------------------------------------------------
    const makeList = () => {
        if (localData == '') {
            return (<tr><td className='none-list-td' colSpan={6}>랭킹을 등록해주세요!</td></tr>)
        } 
        return sortList(goldSortList);

    }
    // -----------------------------------------------------------------------
    // UI 생성 ----------------------------------------------------------------
    return (
        <table>
            <thead>
                <tr>
                    <th>국가명<Button className={'sort-btn'} label={'▼'} onClick={() => makeList()}/></th>
                    <th>금메달<Button className={'sort-btn'} label={'▼'} onClick={() => makeList()}/></th>
                    <th>은메달</th>
                    <th>동메달</th>
                    <th>총합<Button className={'sort-btn'} label={'▼'} onClick={() => makeList()}/></th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {makeList()}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={6}>🩵 (｡◠‿◠｡) 💙</th>
                </tr>
            </tfoot>
        </table>
    )
}

export default ResultTable