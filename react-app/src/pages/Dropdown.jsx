import { useState } from 'react';

export default function Dropdown() {
    const [flag, setFlag] = useState(true);

    const isClicked = () => {
        setFlag(flag => !flag);
    };

    console.log(flag);

    return (
        <div className="grid place-items-center pt-[150px]">
            <div className="grid grid-cols-1 justify-center">
                <button onClick={isClicked} className="bg-grey-400 rounded-sm w-[350px] shadow-lg">
                    Select an options
                </button>
                {flag ? (
                    <div className="grid grid-cols-1 rounded-sm w-[350px] shadow-lg items-center justify-center">
                        <button>Option1</button>
                        <button>Option2</button>
                        <button>Option3</button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
