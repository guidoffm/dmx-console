'use client';

export function ClientComponent() {

    const handleClick = async (event: { preventDefault: () => void; }) => {
        console.log('Button clicked');
        const response = await fetch('/foo/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(0),
        });
    }

    return (
        <button 
            onClick={handleClick} 
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
            Click me
        </button>
    );
}