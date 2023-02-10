import React from "react"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"

const HomeLayout = (props) => {

    return(
        <>
            <Navbar />
            {props.children}
            <Footer/>
        </>
    )

}

export default HomeLayout