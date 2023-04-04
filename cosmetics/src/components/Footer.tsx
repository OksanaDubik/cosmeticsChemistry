import React from "react";
import logoFooter from '../images/footer/logoFooter.svg'
import inputEmail from '../images/footer/inputEmail.svg'
import Visa from '../images/footer/Visa.svg'
import mastercard from '../images/footer/mastercard.svg'

export function Footer() {
    return (
        <div className='bg-[#3F4E65]'>
            <div className='w-[70%] bg-[#3F4E65 ml-[15%] mr-[15%] flex justify-between'>
                <div className='w-[24%]'>
                    <img src={logoFooter} alt='logoFooter'/>
                    <p className='text-white'>Компания «Султан» — снабжаем розничные магазины товарами
                        "под ключ" в Кокчетаве и Акмолинской области</p>
                    <p className='text-white'>Подпишись на скидки и акции</p>
                    <div className='flex justify-between bg-[#FFFFFF] rounded-full px-[25px] py-0'>
                        <input type="submit" value='Введите ваш E-mail'/>
                        <img src={inputEmail} alt='inputEmail'/>

                    </div>

                </div>
                <div className='w-[19%]'>
                    <h2 className='text-white'>Меню сайта</h2>
                    <ul className='text-white'>
                        <li>О компании</li>
                        <li>Доставка и оплата</li>
                        <li>Возврат</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className='w-[19%]'>
                    <h2 className='text-white'>Категории</h2>
                    <ul className='text-white'>
                        <li>Бытовая химия</li>
                        <li>Косметика и гигиена</li>
                        <li>Товары для дома</li>
                        <li>Товары для детей и мам</li>
                        <li>Посуда</li>
                    </ul>
                </div>
                <div className='w-[19%]'>
                    <h2 className='text-white'>Контакты:</h2>
                    <ul className='text-white'>
                        <li>+7(777)490-00-91</li>
                        <li>время работы: 9:00-20:00</li>
                        <li>Заказать звонок</li>
                        <li><p>opt.sultan@mail.ru</p>
                            <p>На связи в любое время</p>
                        </li>
                        <li className='flex'><img src={Visa} alt='visa'/> <img src={mastercard} alt='mastercard'/></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}