'use client';

import { useState } from "react";

interface SliderComponentProps {
    id: string;
    initialValue: number;
    // min: number;
    // max: number;
    onChange: (id: string, value: number) => void;
}

export function SliderComponent({ id, initialValue, onChange }: SliderComponentProps) {
    const [sliderValue, setSliderValue] = useState(initialValue);

    // const handleClick = async (event: { preventDefault: () => void; }) => {
    //     console.log('Button clicked');
    //     const response = await fetch('/api/off', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(0),
    //     });
    // }

    const sliderChange = async (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;
        setSliderValue(newValue);
        onChange(id, newValue);
    }

    return (
        <div className="flex flex-col justify-between items-start bg-slate-100 h-96 w-30 p-1 border border-black m-0.5" id="slider-container">

            <label id="labelValue" className="h-[10%] w-[100%] text-center">{`${sliderValue}`}</label>
            <input
                type="range"
                value={sliderValue}
                min="0"
                max="255"
                className="h-[80%] w-8"
                onChange={sliderChange}
                id="slider"
                style={{ appearance: 'slider-vertical', WebkitAppearance: 'slider-vertical' }}
            />
            <label id="labelNumber" className="h-[10%] w-[100%] text-center flex items-center justify-center">{`${Number(id) + 1}`}</label>

        </div>

    );
}