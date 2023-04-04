import React, {useState} from "react";
import {Link} from "react-router-dom";
import menuSearch from "../images/headers/menuSearch.svg";
import {HeaderTop} from "../components/HeaderTop";
import {HeaderBottom} from "../components/HeaderBottom";
import {Footer} from "../components/Footer";

const drawer =
    {
        price: 164

    }

export function Drawer() {
    const [count, setCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(drawer.price)

    const addOne = () => {

        setTotalPrice(drawer.price * (count + 1))
        setCount(count + 1)
    }
    const decreaseOne = () => {

        setCount((count > 0) ? count - 1 : 0)
        setTotalPrice(drawer.price * (count - 1))
    }
    return (
        <div>
            <HeaderTop/>
            <hr/>
            <HeaderBottom/>
            <hr/>
            <div className='containers text-lg '>
            <span className='w-full flex justify-between'>
                <Link to='/'><button className='text-sm  flex-col  p-1 bg-slate-50'>Главная</button></Link>
            </span>
                Basket
                <div className='flex justify-between items-center mb-[30px]'>
                    <img src="https://ir.ozone.ru/s3/multimedia-s/wc250/6564546448.jpg" alt='ozone'/>
                    <div>
                        <b>Универсальное чистящее средство</b>
                        <div className='flex'>
                            <p>Объем, мл</p>
                            <p> 500</p>
                        </div>

                        <p>Brand: Synergetic</p>
                        <p>Универсальный биоразлагаемый спрей для уборки SYNERGETIC</p>
                    </div>
                    <div className='flex justify-center text-center items-center'>
                        <button onClick={addOne}>+</button>
                        <p>{count}</p>
                        <button onClick={decreaseOne}>-</button>
                    </div>
                    <p>{totalPrice} ₸</p>
                </div>
                <div className='flex justify-between'>
                    <button className='btn-menu flex'>
                        <p className='text-btn'>Оформить заказ</p>
                        <div className='back-img-btn'>
                            <img src={menuSearch} alt='menuSearch'/>
                        </div>
                    </button>
                    <p>{totalPrice} ₸</p>
                </div>
            </div>
            <Footer/>
        </div>

    )
}