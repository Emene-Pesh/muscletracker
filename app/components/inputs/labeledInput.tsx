import React from "react";

interface LabelledInputProps {
    name: string;
    type: string;
    defaultValue: string | number;
}

export default function LabelledInput(props: LabelledInputProps) {
    return (
        <div>
            <label>{props.name}</label>
            <br />
            <input type={props.type} defaultValue={props.defaultValue} />
        </div>
        
    );
}
