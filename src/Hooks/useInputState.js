import { useState } from "react";

const useInputState = (defaultValue = "") => {
    const [value , setValue] = useState(defaultValue);

    const handleSetValue = e => {
        setValue(e.target.value);
    }

    return [value , handleSetValue];
}

export default useInputState;