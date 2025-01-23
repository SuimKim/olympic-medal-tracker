import React from 'react'

const MedalItem = ({ itemTitle, itemType, itemValue, setItem, labelClass, inputClass, holder }) => {

// -----------------------------------------------------------------------
// onChange에 넣을 함수(state에 변경된 값 넣기) ---------------------------------
    const changeValue = e => {
        setItem(e.target.value);
    };
// -----------------------------------------------------------------------
// UI 생성 ----------------------------------------------------------------
    return (<>
        <div className='item-box'>
            <p className={labelClass}>{itemTitle}</p>
            <input 
                placeholder={holder} 
                type={itemType} 
                value={itemValue} 
                onChange={changeValue} 
                className={inputClass} min={0} />
        </div>
    </>

    )


}

export default MedalItem