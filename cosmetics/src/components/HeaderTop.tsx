import address from "../images/headers/address.svg";
import mail from "../images/headers/mail.svg"
import React from "react";

export function HeaderTop() {
    return (
        <div className='containers space-x-0 space-y-0 mt-[14px]'>
            <div className='flex justify-between mb-[13px]'>
                <div className='contacts flex justify-start w-1/2'>
                    <div className='address flex '>
                        <img className='pr-4' src={address} alt='address'/>
                        <div>
                            <p className=' text-[14px] font-[600]'>г. Кокчетав, ул. Ж. Ташенова 129Б </p>
                            <p className='font-[300] text-[12px] text-[#3F4E65] '>(Рынок Восточный)</p>
                        </div>
                    </div>
                    <div className='mail flex'>
                        <img className='pr-4 pl-10' src={mail} alt='mail'/>
                        <div>
                            <p className='text-[14px] font-[600]'>opt.sultan@mail.ru </p>
                            <p className='font-[300] text-[12px] text-[#3F4E65]'>На связи в любое время</p>
                        </div>
                    </div>
                </div>
                <div className='menu flex  justify-end w-1/2'>
                    <ul className='flex justify-around'>
                        <li><a href=""><p className='pl-7 text-[14px]'>О компании</p></a></li>
                        <li><a href=""><p className='pl-7 text-[14px]'>Доставка и оплата</p></a></li>
                        <li><a href=""><p className='pl-7 text-[14px]'>Возврат</p></a></li>
                        <li><a href=""><p className='pl-7 text-[14px]'>Контакты</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}