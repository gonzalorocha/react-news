import React, { useState } from 'react'

const useSelect = (initailState, options) => {
    const [state, setState] = useState(initailState);

    const SelectNews = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >       
        {
            options.map((op) => (
                <option key={op.value} value={op.value}>{op.label}</option>
            ))
        }

        </select>
    )

    return [state, SelectNews];
}
 
export default useSelect;