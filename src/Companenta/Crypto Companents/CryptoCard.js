import React from 'react'
import "./CryptoCard.css"
import purpleSt from "../../Assets/Images/Purple Statistic.png"
import greenSt from "../../Assets/Images/Green Statistic.png"
import pinkSt from "../../Assets/Images/Pink Statistic.png"
import upIcon from "../../Assets/Icons/Up.svg"
import downIcon from "../../Assets/Icons/Down.svg"


export function CryptoCard() {
    return (
        <div id='crypto-cards-main-container'>
            <div id="crypto-card-container">
                <div id="card-container-left">
                    <h3>Bitcoin</h3>
                    <img src={purpleSt} alt="" />
                </div>
                <div id="card-container-right">
                    <h2>$45,741</h2>
                    <div id="card-container-right-inside">
                        <p>+15%</p>
                        <img src={upIcon} alt="" />
                    </div>
                </div>
            </div>
            <div id="crypto-card-container">
                <div id="card-container-left">
                    <h3>Bitcoin</h3>
                    <img src={greenSt} alt="" />
                </div>
                <div id="card-container-right">
                    <h2>$45,741</h2>
                    <div id="card-container-right-inside">
                        <p>+15%</p>
                        <img src={downIcon} alt="" />
                    </div>
                </div>
            </div>
            <div id="crypto-card-container">
                <div id="card-container-left">
                    <h3>Bitcoin</h3>
                    <img src={pinkSt} alt="" />
                </div>
                <div id="card-container-right">
                    <h2>$45,741</h2>
                    <div id="card-container-right-inside">
                        <p>+15%</p>
                        <img src={upIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
