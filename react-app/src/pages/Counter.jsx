import { Minus, MinusSquare, Plus, PlusSquare, Redo, RedoIcon, Undo, UndoIcon } from 'lucide-react';
import { useState } from 'react';

export default function Counter() {
    const [history, setHistory] = useState([0]);
    const [position, setPosition] = useState(0);

    let currValue = history[position];

    const addValuetoHistory = newValue => {
        const newHistory = [...history.slice(0, position + 1), newValue];
        setHistory(newHistory);
        setPosition(position + 1);
    };
    const decrement = () => addValuetoHistory(currValue - 1);
    const increment = () => addValuetoHistory(currValue + 1);

    const prevValue = () => {
        setPosition(position - 1);
    };
    const nextValue = () => {
        setPosition(position + 1);
    };

    return (
        <div className="grid place-items-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-3">Counter App</h1>

            <div className="flex justify-center text-4xl mb-2">{currValue}</div>
            <div className="flex justify-center gap-2">
                <button onClick={decrement}>
                    <MinusSquare className="h-10 w-10"></MinusSquare>
                </button>
                <button onClick={increment}>
                    <PlusSquare className="h-10 w-10"></PlusSquare>
                </button>
            </div>
            <div className="flex justify-center gap-2 m-2">
                <button disabled={position === 0} onClick={prevValue}>
                    <UndoIcon className="h-12 w-12 shadow-lg"></UndoIcon>
                </button>
                <button disabled={position > history.length} onClick={nextValue}>
                    <RedoIcon className="h-12 w-12 shadow-lg"></RedoIcon>
                </button>
            </div>
        </div>
    );
}
