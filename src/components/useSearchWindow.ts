import { useState } from "react"

const useInputText = () =>{

	const [value, setValue] = useState('')

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
setValue(event.target.value)
	}
	return {value, handleChange}
}

export default useInputText
