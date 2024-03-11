import React from "react";
import LabelledInput from "./labeledInput";

interface setInputProps {
    repAmount: number;
    weight: number;
    rpe: number;
}

export default function SetInput(props: setInputProps) {
    return (
        <div>
            <LabelledInput name="Reps" type="number" defaultValue={props.repAmount} />
            <LabelledInput name="Weight" type="number" defaultValue={props.weight} />
            <LabelledInput name="RPE" type="number" defaultValue={props.rpe} />
        </div>
    );
}