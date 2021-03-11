import { useState } from "react";

export const useForm = () => {

    const initialState = {}

    const [formValues, setFormValues] = useState(initialState)

    const handleInputChange = ({target}) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleReset = () => {

        setFormValues(initialState)
    }

    return [
        formValues,
        handleInputChange,
        handleReset
    ]
}