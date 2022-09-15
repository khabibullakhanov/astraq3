import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export function PureComponent() {

    const data = [
        {
            name: 'Jan',
            uv: 5500,
            pv: 4450,
            amt: 2400,
        },
        {
            name: 'Jan',
            uv: 5500,
            pv: 4450,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3700,
            pv: 2800,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 2190,
            pv: 3400,
            amt: 5100,
        },
        {
            name: 'Aug',
            uv: 2490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 5100,
            amt: 3660,
        },
        {
            name: 'Oct',
            uv: 1190,
            pv: 2400,
            amt: 5600,
        },
        {
            name: 'Nov',
            uv: 590,
            pv: 800,
            amt: 3470,
        },
        {
            name: 'Dec',
            uv: 3490,
            pv: 1300,
            amt: 5100,
        },
    ];


    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={100}
                height={100}
                data={data}
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="right" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="left" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="pv" fill="#5149E4" />
                <Bar yAxisId="right" dataKey="uv" fill="#FFB9CD" />
            </BarChart>
        </ResponsiveContainer>
    );
}

