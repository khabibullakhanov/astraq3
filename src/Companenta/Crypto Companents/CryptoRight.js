import React, { PureComponent } from 'react'
import "./CryptoRight.css"
import { CryptoRightStatistics } from './CryptoRightStatistics'
import bitcoinLogo from "../../Assets/Icons/BitCoin Logo.svg"
import etherem from "../../Assets/Icons/Etherum Logo.svg"
import tLogo from "../../Assets/Icons/T logo.svg"
import uchAylana from "../../Assets/Icons/Uch aylana logo.svg"

export function CryptoRight() {

    return (
        <div id='cryptoRight-main-container'>
            <div id='crypto-right-header'>
                <h2>Market Activity</h2>
                <div id='crypto-right-header-select'>
                    <select>
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>More...</option>
                    </select>
                </div>
            </div>
            <div>
                <CryptoRightStatistics />
            </div>
                <h2>Recent Trading</h2>
                <h2></h2>
            <div>
                <div id="crypto-right-inside-content">
                    <div id="crypto-right-inside-content-first">
                        <div id="crypto-right-inside-content-first-left">
                            <div id="crypto-right-inside-content-first-left-img">
                                <img src={bitcoinLogo} alt="" />
                            </div>
                            <div id="crypto-right-inside-content-first-left-text">
                                <h3>Bitcoin</h3>
                                <p>BTC</p>
                            </div>
                        </div>
                        <div>
                            <div id="crypto-right-inside-content-first-right">
                                <h3>$13.90</h3>
                                <p>Today, 12:30 AM</p>
                            </div>
                        </div>
                    </div>
                    <div id='crypto-right-inside-content-second'>
                        <div id='crypto-right-inside-content-second-left'>
                            <div id='crypto-right-inside-content-second-left-img'>
                                <img src={etherem} alt="" />
                            </div>
                            <div id="crypto-right-inside-content-second-left-text">
                                <h3>Bitcoin</h3>
                                <p>BTC</p>
                            </div>
                        </div>
                        <div id="crypto-right-inside-content-second-right">
                            <h3>$13.90</h3>
                            <p>Today, 12:30 AM</p>
                        </div>
                    </div>
                    <div id="crypto-third-content-main">
                        <div id='crypto-third-content-main-left'>
                            <div id='crypto-third-content-main-left-img'>
                                <img src={tLogo} alt="" />
                            </div>
                            <div id='crypto-third-content-main-left-text'>
                                <h3>Bitcoin</h3>
                                <p>BTC</p>
                            </div>
                        </div>
                        <div id='crypto-third-content-main-right'>
                            <h3>$13.90</h3>
                            <p>Today, 12:30 AM</p>
                        </div>
                    </div>
                    <div id="crypto-fourth-content-main">
                        <div id="crypto-fourth-content-main-left">
                            <div id="crypto-fourth-content-main-left-img">
                                <img src={uchAylana} alt="" />
                            </div>
                            <div id="crypto-fourth-content-main-left-text">
                                <h3>Bitcoin</h3>
                                <p>BTC</p>
                            </div>
                        </div>
                        <div id="crypto-fourth-content-main-right">
                            <h3>$13.90</h3>
                            <p>Today, 12:30 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
