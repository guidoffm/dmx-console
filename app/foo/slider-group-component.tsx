'use client';

import { useState } from "react";
import { SliderComponent } from "./slider-component";

export function SliderGroupComponent() {
    const [data, setData] = useState(Buffer.alloc(8));
    const handleSliderChange = async (id: string, value: number) => {
        // console.log(`Slider ${id} value changed to: ${value}`);
        const buffer = data;
        buffer.writeUInt8(value, parseInt(id));
        // console.log('Buffer:', buffer);
        setData(buffer);
        const response = await fetch('/api/slider', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(buffer),
        });
    };

    return (
        <div className="flex justify-center items-center h-screen space-x-1">
            <SliderComponent id="0" onChange={handleSliderChange} />
            <SliderComponent id="1" onChange={handleSliderChange} />
            <SliderComponent id="2" onChange={handleSliderChange} />
            <SliderComponent id="3" onChange={handleSliderChange} />
        </div>
    );
}