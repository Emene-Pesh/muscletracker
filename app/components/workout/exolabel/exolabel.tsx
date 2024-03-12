'use client';
import * as React from 'react';

interface ExoLabelProps {
  name: string;
  sets: string;
  detail:string;
}

export default function ExoLabel(props: ExoLabelProps) {
    return (
        <div title={props.detail}>
            <h1> {props.name} </h1>
            <p>{props.sets}</p>
        </div>
    );
}