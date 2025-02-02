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
        <div className="flex justify-between bg-slate-100 h-12 w-96 px-2 border border-black m-0.5" id="slider-container">
            <label id="labelNumber" className="mt-2 text-center w-[10%]">{`${Number(id) + 1}`}</label>

            <input
                type="range"
                value={sliderValue}
                min="0"
                max="255"
                className="w-[80%]"
                onChange={sliderChange}
                id="slider"
                // style={{ transform: 'rotate(-90deg)' }}
            />
            <label id="labelValue" className="mt-2 text-right w-[10%]">{`${sliderValue}`}</label>

        </div>

    );
}