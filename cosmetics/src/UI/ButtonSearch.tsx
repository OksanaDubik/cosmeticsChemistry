import React from "react";
import menuSearch from "../images/headers/menuSearch.svg";

export function ButtonSearch (){
    return(
        <button className='btn-menu flex' >
            <p className='text-btn text-[12px] font-[400] text-[#FFFFFF]'>Поиск...</p>
            <div className='back-img-btn'>
                <img  src={menuSearch} alt='menuSearch'/>
            </div>
        </button>
    )
}