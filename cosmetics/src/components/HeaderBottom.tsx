import React, {useState} from "react";
import logo from '../images/headers/logo.svg'
import menuCatalog from '../images/headers/menuCatalog.svg'
import menuSearch from '../images/headers/menuSearch.svg'
import menuColl from '../images/headers/menuColl.jpg'
import menuPriceArrow from '../images/headers/menuPriceArrow.svg'
import menuBasket from '../images/headers/menuBasket.svg'
import menuBasketCount from '../images/headers/menuBasketCount.svg'
import {ButtonSearch} from "../UI/ButtonSearch";
import {Link} from "react-router-dom";
import {Drawer} from "../pages/Drawer";


export function HeaderBottom(props: any) {
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-[#FFC85E]' : 'bg-[#EDEDED]'
    const btnClasses = ['flex', 'py-[0px]', 'items-center', 'justify-between', 'px-[32px]', 'rounded-full', btnBgClassName]
    const [displayBlock, setDisplayBlock] = useState(true)

    return (
        <div className='containers space-x-0 space-y-0 pb-[20px] pt-[20px]'>
            <div className='flex justify-between h-20 pt-4 pb-4'>
                <img src={logo} alt='logo'/>
                <button className='btn-menu flex'>
                    <p className='text-btn font-[600] text-[14px] text-[#FFFFFF]'>Каталог</p>
                    <div className='back-img-btn'>
                        <img className='btn-img' src={menuCatalog} alt='menuCatalog'/>
                    </div>
                </button>
                <ButtonSearch/>
                <div className='flex'>
                    <div className='flex flex-col items-end'>
                        <span className='font-[600] text-[14px] '>+7(777)490-00-91</span>
                        <span className='font-[300] text-[12px] '>время работы: 9:00-20:00</span>
                        <span className='font-[400] text-[10px] underline'>Заказать звонок</span>
                    </div>
                    <img src={menuColl} alt='menuColl'/>
                </div>
                <button className='btn-menu flex'>
                    <p className='text-btn font-[600] text-[14px] text-[#FFFFFF]'>Прайс-лист</p>
                    <div className='back-img-btn'>
                        <img className='btn-img' src={menuPriceArrow} alt='menuPriceArrow'/>
                    </div>
                </button>
                <div className='flex'>
                    {displayBlock ? <Link to='drawer'>
                        <img className='menu-img h-7 ' src={menuBasket} alt={menuBasket}/>
                    </Link> : <img className='menu-img h-7 ' src={menuBasket} alt={menuBasket}/>}

                    <p className='menu-count bg-amber-300 rounded font-[600] text-[14px] text-[#FFFFFF]'>{props.countProduct}</p>
                    <div className='flex flex-col'>
                        <span className='font-[300] text-[12px] text-[#3F4E65]'>Корзина</span>
                        <span className='text-[14px] font-[600]'>12&nbsp;478 ₸</span>
                    </div>
                </div>
            </div>
        </div>
    )
}