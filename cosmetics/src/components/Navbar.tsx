import React, {useState} from "react";
import menuSearch from "../images/headers/menuSearch.svg";
import {ButtonSearch} from "../UI/ButtonSearch";
import basketNavbar from "../images/navbar/basketNavbar.svg"
import {Link} from "react-router-dom";
import {linkArr} from "../data/navigationLink"


export function Navbar() {
    const [checked, setChecked] = useState(false)
    console.log(checked)
    const [currentOptions, setCurrentOptions] = useState('grifon')

    const changeOptions = (newOption: any) => {
        setCurrentOptions(newOption)
    }

    return (

        <div className='w-1/4 flex flex-col pr-[5%]'>
            <h1 className='text-[15px] font-[500] pb-[10px]'>ПОДБОР ПО ПАРАМЕТРАМ</h1>
            <div className='flex pb-[16px]'>
                <p className='text-[14px] font-[300] text-[#3F4E65]'>Цена</p>
                <p className='text-[14px] font-[500] text-[#3F4E65]'> ₸</p>
            </div>

            <form className='flex justify-between pb-[30px]'>
                <input className='input-navbar w-1/2' value="0"/>
                <p className='p-1'>-</p>
                <input className='input-navbar w-1/2' value="1000"/>
            </form>
            <h2 className='text-[15px] font-[500] pb-[15px]'>Производитель</h2>
            <ButtonSearch/>
            <form>

                <input  checked={checked} onChange={() => setChecked(!checked)} id='grifon' name='grifon' value=''
                       type='checkbox'/>
                <label className='pl-[10px] text-[14px] font-[400] text-[#3F4E65]' htmlFor='grifon'>Grifon(56)</label><br></br>
                <input id='boyscout' name='boyscout' value='' type='checkbox'/>
                <label className='pl-[10px] text-[14px] font-[400] text-[#3F4E65] ' htmlFor='boyscout'>Boyscout(66)</label><br></br>
                <input id='paclan' name='paclan' value='' type='checkbox'/>
                <label className='pl-[10px] text-[14px] font-[400] text-[#3F4E65] ' htmlFor='paclan'>Paclan(166)</label><br></br>
                <input id='bulgari' name='bulgari' value='' type='checkbox'/>
                <label className='pl-[10px] text-[14px] font-[400] text-[#3F4E65] ' htmlFor='bulgari'>Булгари Грин(21)</label><br></br>

            </form>
            <label>
                <select className=' text-[12px] font-[500] pb-[20px] text-[#3F4E65]'  onChange={(ev) => changeOptions(ev.target.value)} >
                    <option className=' text-[12px] font-[500]' value="Показать все">Показать все</option>
                    <option value="Grifon">Grifon</option>
                    <option value="Boyscout">Boyscout</option>
                    <option value="Paclan">Paclan</option>
                </select>
            </label>
            <hr/>
            <h2 className='text-[15px] font-[500] pb-[15px] pt-[20px] '>Бренд</h2>
            <ButtonSearch/>
            <form>

                <input checked={checked} onChange={() => setChecked(!checked)} id='nivea' name='nivea' value=''
                       type='checkbox'/>
                <label className='pl-[10px] text-[14px] font-[400] text-[#3F4E65] ' htmlFor='nivea'>Nivea (56)</label><br></br>
                <input id='grifon' name='grifon' value='' type='checkbox'/>
                <label className='pl-[10px] text-[14px] font-[400] text-[#3F4E65] ' htmlFor='grifon'>GRIFON(66)</label><br></br>
                <input id='box' name='box' value='' type='checkbox'/>
                <label className='pl-[10px] text-[14px] font-[400] text-[#3F4E65] ' htmlFor='box'>Домашний сундук(166)</label><br></br>
                <input id='help' name='help' value='' type='checkbox'/>
                <label className='pl-[10px] text-[14px] font-[400] text-[#3F4E65] ' htmlFor='help'>HELP(21)</label><br></br>

            </form>
            <label>
                <select  className=' text-[12px] font-[500] pb-[20px]' onChange={(ev) => changeOptions(ev.target.value)}>
                    <option className=' text-[12px] font-[500]' value="Показать все">Показать все</option>
                    <option value="nivea">Nivea</option>
                    <option value="grifon">GRIFON</option>
                    <option value="box">Домашний сундук</option>
                </select>
            </label>
            <div className='flex justify-between pt-[15px] pb-[25px]'>
                <button className='btn-menu flex'>
                    <p className='text-btn text-[14px] font-[700] text-[#FFFFFF]'>Показать</p>

                </button>
                <button><img src={basketNavbar} alt='basket'/></button>
            </div>

            <ul className='list-none'>
                {linkArr.map(obj => (
                    <li><Link to={obj.to}><h1 className='pl-[10px] text-[14px] font-[400] text-[#3F4E65] pb-[15px]'>{obj.value}</h1></Link></li>
                ))}
            </ul>
        </div>

    )
}