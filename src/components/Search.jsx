import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useDebounce } from "use-debounce";

import { useResultContext } from '../api/GoogleApi'
import Links from "./Links";

export default function Search() {
    const [text, setText] = useState('')
    const { setSearchTerm } = useResultContext()
    const [debounceValue] = useDebounce(text, 800)

    useEffect(() => {
        if(debounceValue) return setSearchTerm(debounceValue)
    }, [debounceValue])

    return(
        <div className="relative sm:mt-10 mt-3">
            <input
                value={text}
                type="text"
                className="sm:w-96 w-80 h-10 dark:bg-gray-200 border pr-3 rounded-full shadow-sm outline-none p-6 pr-12 text-black hover:shadow-lg"
                onChange={(e) => setText(e.target.value)}
            />
            {text && (
                <button type="button" className="absolute top-2 right-6 text-2xl text-gray-400" onClick={() => setText('')}>
                    &#x02A2F;
                </button>
            )}
            <Links />
        </div>
    )
}