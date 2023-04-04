import React from "react";
import {Link} from "react-router-dom";

import {Footer} from "../components/Footer";
import {HeaderTop} from "../components/HeaderTop";
import {HeaderBottom} from "../components/HeaderBottom";
import {Input} from "../components/Input";
import {inputs} from "../data/inputs";

export function Tan() {
    return (
        <div className='containers pt-[45px] pb-[25px]'>
            <HeaderTop/>
            <hr/>
            <HeaderBottom/>
            <hr/>
            <span className='w-full flex justify-between'>
                <Link to='/'> <p className='divide-dashed border-r-2 text-[14px] font-[300] pr-[10px]'>Главная</p></Link>
             <p className='text-[14px] font-[600] text-[#3F4E65] pl-[10px] '> Tan</p>
            </span>
            <div className='flex justify-between items-center '>
                <h1 className='text-[40px] font-[500]'>Tan</h1>

                <Input myInput={inputs}/>
            </div>

            <Footer/>
        </div>
    )
}