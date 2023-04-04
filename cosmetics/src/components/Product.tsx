import React, {useState} from "react";
import {IProduct} from "../model/models";
import cardBasket from '../images/card/cardBasket.svg'
import {Link} from "react-router-dom";

interface ProductProps {
    product: IProduct
    onClickBtn: any
}

export function Product({product, onClickBtn}: ProductProps) {

    return (
        <div className='space-x-0 space-y-0 px-[25px] rounded-[10px] bg-[#ffffff] pb-[0px]'>
            <img className='px-[25px]' src={product.image} alt={product.name}/>
            <div className='flex justify-start'>
                <p>{product.sizeType}</p>
                <p>{product.size}</p>
            </div>
            <Link to='card'><b>{product.name}</b></Link>
            <p>{product.description}</p>
            <div className='flex justify-betweein'>
                <p className='mr-[30px]'>{product.price} ₸</p>
                <button className='btn-menu flex' onClick={onClickBtn}>
                    <p className='text-btn pr-1'>В корзину</p>
                    <div className='pt-2 pl-1 back-img-btn'>
                        <img src={cardBasket} alt={cardBasket}/>
                    </div>
                </button>
            </div>

        </div>
    )
}