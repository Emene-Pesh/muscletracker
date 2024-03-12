'use client';
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

interface LineGraphProps {      
    xAxis: number[];
    series: number[];
    width: number;
    height: number;
    
}

export default function LineGraph(props: LineGraphProps) {
  return (
    <LineChart
    axisHighlight={{x:'band',y:'none'}}
      xAxis={[{ data: props.xAxis }]}
      series={[
        {
          data: props.series,
          curve: "linear",
        },
      ]}
      width={props.width}
      height={props.height}
    />
  );
}