import React from 'react'
import Button from './Button';

const ResultList = ({ list, deleteList }) => {

    const { country, gold, silver, bronze, total } = list; // list 구조분해할당?

// UI 생성 ----------------------------------------------------------------
    return (
        <tr>
            <td>{country}</td>
            <td>{gold}개</td>
            <td>{silver}개</td>
            <td>{bronze}개</td>
            <td>{total}개</td>
            <td><Button className='delete-btn' onClick={() => { deleteList(country) }} label={'✔️'}/></td>
        </tr>
    );

}

export default ResultList;

