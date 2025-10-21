import { useState } from "react";


const useInputField = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
   
    const handleFieldChange = (e) => {
        setValue(e.target.value);
    }

    return [value, handleFieldChange];
};

export default useInputField;