import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Body} from "./pages/Body";
import {Face} from "./pages/Face";
import {Feet} from "./pages/Feet";
import {Gifts} from "./pages/Gifts";
import {Hair} from "./pages/Hair";
import {Hands} from "./pages/Hands";
import {Hygiene} from "./pages/Hygiene";
import {Mouth} from "./pages/Mouth";
import {Paper} from "./pages/Paper";
import {Shaving} from "./pages/Shaving";
import {Tan} from "./pages/Tan";
import {Drawer} from "./pages/Drawer";
import CardProduct from "./components/CardProduct";



function App() {
    return (
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/body' element={<Body/>} />
    <Route path='/face' element={<Face/>} />
    <Route path='/feet' element={<Feet/>} />
    <Route path='/gifts' element={<Gifts/>} />
    <Route path='/hair' element={<Hair/>} />
    <Route path='/hands' element={<Hands/>} />
    <Route path='/hygiene' element={<Hygiene/>} />
    <Route path='/mouth' element={<Mouth/>} />
    <Route path='/paper' element={<Paper/>} />
    <Route path='/shaving' element={<Shaving/>} />
    <Route path='/tan' element={<Tan/>} />
    <Route path='/card' element={<CardProduct/>}/>
    <Route path='/drawer' element={<Drawer/>}/>
</Routes>



    )

}

export default App;
