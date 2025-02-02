'use client';

import { useState } from "react";
import { SliderComponent } from "./slider-component";

interface SliderGroupComponentProps {
    initialData: string
}
export function SliderGroupComponent({ initialData }: SliderGroupComponentProps) {
    const initialLength = 8;
    // convert initialData to Buffer
    const initialArray = initialData.split(',').map(Number).slice(0, initialLength);
    // fill up to initialLength with 0
    while (initialArray.length < initialLength) {
        initialArray.push(0);
    }
    const [data, setData] = useState(Buffer.from(initialArray));
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
        <div className="flex justify-center items-center h-[80vh] ">
            {initialArray.map((_, index) => (
                <SliderComponent
                    key={index}
                    id={index.toString()}
                    initialValue={initialArray[index]}
                    // min={0}
                    // max={255}
                    onChange={handleSliderChange}
                />
            ))}
        </div>
    );
}