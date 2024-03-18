import * as react from 'react';
import LineGraph from '../components/stats/graph/graph';

export default function App() {
    return (
        <div>
            <LineGraph xAxis={[1, 2, 3, 5, 8, 10] } series={[2, 5.5, 2, 8.5, 1.5, 5]} width={500} height={500}></LineGraph>
        </div>
    );
}