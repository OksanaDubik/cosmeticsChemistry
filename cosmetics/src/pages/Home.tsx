import React, {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar";
import {Product} from "../components/Product";
import {IProduct} from "../model/models";
import {Footer} from "../components/Footer";
import {Navigation} from "../components/Navigation";
import {linkArr} from "../data/navigationLink";
import {HeaderTop} from "../components/HeaderTop";
import {HeaderBottom} from "../components/HeaderBottom";
import {CatalogHeader} from "../components/CatalogHeader";


export function Home() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState(0);
    const [cartItems, setCartItems] = useState([])
    const [countProduct, setCountProduct] = useState(1)

    const addCountProduct = () => {
        setCountProduct(countProduct + 1)

    }

    const url = 'https://6421ce2734d6cd4ebd7c5178.mockapi.io/items'

    async function fetchProducts() {
        fetch(`${url}?_limit=5:number`)
            .then((res) => {
                return res.json();
            }).then(json => {
            setProducts(json)
        })

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='body'>
            <HeaderTop/>
            <hr/>
            <HeaderBottom countProduct={countProduct}/>
            <hr/>
            <CatalogHeader/>
            <div className='containers space-x-0 space-y-0'>

                <nav className='flex justify-between pb-[50px]'>
                    {linkArr.map(obj => (
                        <Navigation
                            to={obj.to}
                            value={obj.value}
                        />
                    ))}
                </nav>

            </div>
            <div className='containers'>
                <div className=' flex justify-between'>
                    <Navbar/>
                    <div className='grid gap-4 grid-cols-3 grid-rows-5'>
                        {products.map(product => <Product product={product} key={product.id} onClickBtn={() => {
                                                     addCountProduct()
                        }}/>)}
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}