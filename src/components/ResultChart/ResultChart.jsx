import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
    {
        "student_id": 1,
        "name": "Alice",
        "physics": 85,
        "chemistry": 90,
        "math": 88
    },
    {
        "student_id": 2,
        "name": "Bob",
        "physics": 92,
        "chemistry": 90,
        "math": 91
    },
    {
        "student_id": 3,
        "name": "Charlie",
        "physics": 60,
        "chemistry": 77,
        "math": 88
    },
    {
        "student_id": 4,
        "name": "David",
        "physics": 85,
        "chemistry": 70,
        "math": 90
    },
    {
        "student_id": 5,
        "name": "Eva",
        "physics": 89,
        "chemistry": 90,
        "math": 90
    },
    {
        "student_id": 6,
        "name": "Frank",
        "physics": 85,
        "chemistry": 80,
        "math": 80
    },
    {
        "student_id": 7,
        "name": "Grace",
        "physics": 85,
        "chemistry": 90,
        "math": 88
    },
    {
        "student_id": 8,
        "name": "Mim",
        "physics": 85,
        "chemistry": 90,
        "math": 88
    },
    {
        "student_id": 9,
        "name": "Jack",
        "physics": 85,
        "chemistry": 90,
        "math": 88
    },
    {
        "student_id": 10,
        "name": "Siam",
        "physics": 85,
        "chemistry": 90,
        "math": 88
    },
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={"chemistry"} stroke='red'></Line>
            </LineChart>
            
        </div>
    );
};

export default ResultChart;