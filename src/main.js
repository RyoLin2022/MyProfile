import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Homelight from "../src/pages/homeLight";
import Homevideo from "../src/pages/homeVideo";
import Homeparticle from "../src/pages/homeParticle";
import Homegrey from "../src/pages/homeGrey";
import Homechef from "../src/pages/homeChef";
import Homedesigner from "../src/pages/homeDesigner";
import Homelawyer from "../src/pages/homeLawyer";
import Homelightnew from "../src/pages/homeLightnew";
import Homedarknew from "../src/pages/homeDarknew";
import Homereveal from "../src/pages/homeReveal";
import Homereveallight from "../src/pages/homeRevealLight";
import Homerevealdarknew from "../src/pages/homeRevealDarknew";
import Homereveallightnew from "../src/pages/homeRevealLightnew";

function App() {
  return (
  	<div>
	  <BrowserRouter>
	    <Routes>
		    <Route path = "/" element={< Home/>}/>
		    <Route path = "/homelight" element={< Homelight/>}/>
		    <Route path = "/homevideo" element={< Homevideo/>}/>
		    <Route path = "/homeparticle" element={< Homeparticle/>}/>
		    <Route path = "/homegrey" element={< Homegrey/>}/>
		    <Route path = "/homechef" element={< Homechef/>}/>
		    <Route path = "/homedesigner" element={< Homedesigner/>}/>
		    <Route path = "/homelawyer" element={< Homelawyer/>}/>
		    <Route path = "/homelightnew" element={< Homelightnew/>}/>
		    <Route path = "/homedarknew" element={< Homedarknew/>}/>
		    <Route path = "/homereveal" element={< Homereveal/>}/>
		    <Route path = "/homereveallight" element={< Homereveallight/>}/>
		    <Route path = "/homerevealdarknew" element={< Homerevealdarknew/>}/>
		    <Route path = "/homereveallightnew" element={< Homereveallightnew/>}/>
		</Routes>
	  </BrowserRouter>
    </div>
  );
}

export default App;