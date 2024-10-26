
import React from "react"
import Header from "./component/Header/header"
import Hero from "./component/Hero/hero"
import Section from "./component/Section/section"
import Sections from "./component/Sections/Sections"
import Origin from "./component/Origin/origin"
import Footer from "./component/Footer/footer"


const page = () =>{
  return(
    <div>
  <Header/>
   <Hero/>
<Section/>
<Sections/>
<Origin/>
<Footer/>
</div>
  )
}
export default page