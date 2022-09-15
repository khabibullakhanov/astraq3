import React from 'react'
import "./DashboardCards.css"
import bag from "../../../Assets/Icons/Bag.svg"
import addFile from "../../../Assets/Icons/Add File.svg"
import upGraphic from "../../../Assets/Icons/Up Graphic.svg"
import piramida from "../../../Assets/Icons/Piramida.svg"


export function DashboardCards() {

    

    return (
        <div>
            <div id='cards-container'>
                <div id="header-card">
                    <div id='header-card-img'>
                        <img src={bag} alt="" />
                    </div>
                    <div id='header-card-text'>
                        <p>Projects</p>
                        <h3>932</h3>
                    </div>
                </div>
                <div id="header-card">
                    <div id='header-card-img'>
                        <img src={addFile} alt="" />
                    </div>
                    <div id='header-card-text'>
                        <p>Projects</p>
                        <h3>932</h3>
                    </div>
                </div>
                <div id="header-card">
                    <div id='header-card-img'>
                        <img src={upGraphic} alt="" />
                    </div>
                    <div id='header-card-text'>
                        <p>Projects</p>
                        <h3>932</h3>
                    </div>
                </div>
                <div id="header-card">
                    <div id='header-card-img'>
                        <img src={piramida} alt="" />
                    </div>
                    <div id='header-card-text'>
                        <p>Projects</p>
                        <h3>932</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
