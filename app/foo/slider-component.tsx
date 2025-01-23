'use client';

import { useState } from "react";

interface SliderComponentProps {
    id: string;
    // initialValue: number;
    // min: number;
    // max: number;
    onChange: (id: string, value: number) => void;
}

export function SliderComponent({id, onChange}: SliderComponentProps) {
    const [sliderValue, setSliderValue] = useState(0); 

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
        // console.log(`Slider value: ${event.target.value}`);
        const newValue = event.target.value;
        setSliderValue(newValue);
        onChange(id, newValue);
        // const response = await fetch('/api/slider', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newValue),
        // });
    }

    return (
        <>
            {/* <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
                Click me
            </button> */}

            <div className="mt-4 w-full flex justify-center">
                <input
                    type="range"
                    value={sliderValue} 
                    min="0"
                    max="255"
                    className="mt-4 w-full transform -rotate-90 w-64"
                    onChange={sliderChange}
                />
            </div>
        </>
    );
}