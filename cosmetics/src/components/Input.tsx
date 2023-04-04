import React from "react";
import {ModelInput} from "../model/modelInput";

interface InputProps {
    myInput: ModelInput
}

export function Input({myInput}: InputProps) {

    return (
        <label className=' flex text-[16px] font-[400] text-[#3F4E65]'>
           <p className='text-[16px] font-[500]'>Сортировка:</p>
            <select className=' ml-1.5'>
                <option className='text-[16px] font-[400] text-[#3F4E65]' value={myInput.nameInput}>{myInput.nameInput}</option>
                <option className='text-[16px] font-[400] text-[#3F4E65]' value={myInput.desc}>{myInput.desc}</option>
                <option className='text-[16px] font-[400] text-[#3F4E65]' value={myInput.asc}>{myInput.asc}</option>
            </select>
        </label>
    )
}

