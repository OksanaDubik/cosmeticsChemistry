import React, {useState} from "react";
import {Input} from "./Input";
import {inputs} from "../data/inputs";

export function CatalogHeader() {

    return (
        <div className='containers pt-[45px] pb-[25px]'>
            <div className='flex justify-start '>
                <div className='flex  pb-[50px] '>
                    <p className='divide-dashed border-r-2 text-[14px] font-[300] pr-[10px]'>Главная</p>
                    <p className='text-[14px] font-[600] text-[#3F4E65] pl-[10px] '>Косметика и гигиена</p>
                </div>
            </div>
            <div className='flex justify-between items-center '>
                <h1 className='text-[40px] font-[500]'>Косметика и гигиена</h1>

                <Input myInput={inputs}/>
            </div>
        </div>
    )
}