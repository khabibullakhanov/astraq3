import React from 'react'
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from "recharts";


export function CryptoStatistics() {

    const data = [
        {
            name: "11.00",
            uv: 90,
            // pv: 800,
            amt: 1400,
            // cnt: 490
        },
        {
            name: "12.00",
            uv: 788,
            // pv: 967,
            amt: 1506,
            // cnt: 590
        },
        {
            name: "13.00",
            uv: 788,
            // pv: 967,
            amt: 606,
        },
        {
            name: "14.00",
            uv: 580,
            // pv: 1200,
            amt: 1228,
            // cnt: 480
        },
        {
            name: "15.00",
            uv: 1820,
            // pv: 1108,
            amt: 1500,
            // cnt: 460
        },
        {
            name: "Page F",
            uv: 1400,
            // pv: 680,
            amt: 1700,
            // cnt: 380
        }
    ];

    return (
        <div>
            <ComposedChart
                width={1135}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
            </ComposedChart>
        </div>
    )
}
