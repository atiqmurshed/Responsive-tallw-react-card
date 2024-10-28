import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

const students = [
    { "id": 1, "name": "A", "math": 78, "physics": 82, "chemistry": 79 },
    { "id": 2, "name": "B", "math": 85, "physics": 76, "chemistry": 84 },
    { "id": 3, "name": "C", "math": 92, "physics": 88, "chemistry": 91 },
    { "id": 4, "name": "D", "math": 65, "physics": 72, "chemistry": 68 },
    { "id": 5, "name": "E", "math": 88, "physics": 89, "chemistry": 85 },
    { "id": 6, "name": "F", "math": 74, "physics": 70, "chemistry": 78 },
    { "id": 7, "name": "G", "math": 90, "physics": 85, "chemistry": 92 },
    { "id": 8, "name": "H", "math": 81, "physics": 80, "chemistry": 79 },
    { "id": 9, "name": "I", "math": 69, "physics": 73, "chemistry": 72 },
    { "id": 10, "name": "J", "math": 95, "physics": 91, "chemistry": 94 }
  ];

    return (
        <div>
            <LChart width={800} height={400} data={students}>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Line dataKey="math" stroke='purple'></Line>
            <Line dataKey={"physics"} stroke="yellow"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;