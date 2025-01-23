import React from 'react'
import { useState } from 'react';
import MedalItem from './FormItem';
import Button from './Button';

const MedalForm = ({ list, setList }) => {

    let localData = [];

    localStorage.getItem('data') !== null && (localData = JSON.parse(localStorage.data));

    let countryArr = localData.map(e => {return e.country;})
// state 할당 -------------------------------------------------------------
    const [country, setCountry] = useState("");
    const [gold, setGold] = useState('');
    const [silver, setSilver] = useState('');
    const [bronze, setBronze] = useState('');
// -----------------------------------------------------------------------
// 리스트 추가 --------------------------------------------------------------
    const addList = (e) => {
        e.preventDefault();

        const newList = { country: country, gold: gold, silver: silver, bronze: bronze, total: Number(gold)+Number(silver)+Number(bronze) };

        if (!newList.country.trim() || !newList.gold.trim() || !newList.silver.trim() || !newList.bronze.trim()) {
            alert("모든 항목을 입력하세요!");
            return; 
        } else if (countryArr.includes(newList.country) === true){
            alert("이미 저장된 국가입니다.");
            return;
        }
        
        if (localData == null) {
            localStorage.setItem('data', JSON.stringify([newList]));
          } else {
            localData.push(newList);
            localStorage.setItem('data', JSON.stringify(localData));
          }
        setList([...list, newList]);
        
        setCountry('');
        setGold('');
        setSilver('');
        setBronze('');
    }
// 리스트 수정 --------------------------------------------------------------
    const updateList = (country) => {
        if (!country.trim() || !gold.trim() || !silver.trim() || !bronze.trim()) {
            alert("모든 항목을 입력하세요!");
            return; 
        } else if(countryArr.includes(country) === false){
            alert("저장되지 않은 국가입니다.");
            return;
        }

        const updateList = localData.map(function (a) {
            return a.country === country 
                ? { country: a.country, gold: gold, silver: silver, bronze: bronze, total: Number(gold)+Number(silver)+Number(bronze) }
                : { country: a.country, gold: a.gold, silver: a.silver, bronze: a.bronze, total: a.total }
        });
        setList(updateList);

        localData = updateList;
        localStorage.setItem('data', JSON.stringify(localData));

        setCountry('');
        setGold('');
        setSilver('');
        setBronze('');
    }
// -----------------------------------------------------------------------
// UI 생성 ----------------------------------------------------------------
    return (<>
        <form onSubmit={addList}>
            <div className='input-box'>
                <MedalItem 
                    itemTitle={"국가명"} 
                    itemValue={country} 
                    setItem={setCountry} 
                    itemType={'text'} 
                    labelClass={'country-label'} 
                    inputClass={'country-input'}
                    holder={'국가명을 입력하세요!'} />
                <MedalItem 
                    itemTitle={"금메달"} 
                    itemValue={gold} 
                    setItem={setGold} 
                    itemType={"number"} 
                    labelClass={'gold-label'} 
                    inputClass={'gold-input'}
                    holder={'금메달 갯수를 입력하세요!'} />
                <MedalItem 
                    itemTitle={"은메달"} 
                    itemValue={silver} 
                    setItem={setSilver} 
                    itemType={"number"} 
                    labelClass={'silver-label'} 
                    inputClass={'silver-input'}
                    holder={'은메달 갯수를 입력하세요!'} />
                <MedalItem 
                    itemTitle={"동메달"} 
                    itemValue={bronze} 
                    setItem={setBronze} 
                    itemType={"number"} 
                    labelClass={'bronze-label'} 
                    inputClass={'bronze-input'}
                    holder={'동메달 갯수를 입력하세요!'} />
                <Button 
                    className='add-btn' 
                    type="submit" 
                    label={'등록하기'}/>
                <Button 
                    className='update-btn' 
                    type="button" 
                    onClick={() => updateList(country)} 
                    label={'수정하기'} />
            </div>
        </form>
    </>
    )
}

export default MedalForm