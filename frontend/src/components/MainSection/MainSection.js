import React from 'react'
import "./MainSection.css"
import Catalog from "../Catalog/Catalog";
import SideCategory from "../SideCategory/SideCategory";
import SearchSection from "../SearchSection/SearchSection";

const MainSection = props => (
    <div className="container">
    <div className="main-container">
        <div className="side-container">
            <SideCategory/>
        </div>
        <div className="center-container">
            <SearchSection/>
            <Catalog/>
        </div>
    </div>
    </div>
)
export default MainSection;