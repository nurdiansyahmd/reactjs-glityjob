import React from "react"
import NavbarDashboard from "./components/navbar/NavbarDashboard"

const DashboardLayout = (props) => {

    return(
        <>
            <NavbarDashboard/>
            {props.children}
        </>
    )

}

export default DashboardLayout