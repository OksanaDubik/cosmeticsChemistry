import React from "react";
import {Link} from "react-router-dom";

export function Navigation(props: any) {

    return (
        <Link className='flex justify-between' to={props.to}>
            <button className='font-[400] text-[14px] text-[#3F4E65]l h-[70px]  bg-slate-50 mx-[5px]'>
                <p className='py-[18px] px-[15px]'>{props.value}</p>
            </button>
        </Link>
    )
}