import React from 'react'
// Components:
import Header from "./header/header"
// Style:

const Layout = (props) => {
    return (
        <div>
            <div className="layoutContainer">
                <div className="layoutContent">
                    <Header />
                    <div className="layoutHeaderSpace"> {props.children} </div>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;