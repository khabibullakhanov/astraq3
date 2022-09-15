import React from 'react'
import "./Persent.css"
import persent from "../../Assets/Images/Present.png"

export function Persent() {
    return (
        <div>
            <div id='persent-card'>
                <h2>Server Status</h2>
                <div id=''>
                    <img src={persent} alt="" />
                    <div id="present-text">
                        <h1>80.2%</h1>
                        <span id="speed">Total Speed: <p>  10.95 Mbps</p></span>
                        <div id="country-name">
                            <div>
                                <p>Country</p>
                                <h3>Indonesia</h3>
                            </div>
                            <div>
                                <p>Domain</p>
                                <h3>website.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
