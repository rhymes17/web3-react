import React from 'react'

interface Input {
    value: string,
    placeholder: string,
    name: string,
    setValue : (value: React.SetStateAction<string>) => void;
}

const Input = ({value, placeholder, name, setValue} : Input) => {
  return (
    <input
        className="bg-[#1A1C28] outline-none px-3 py-2 rounded-lg flex-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        name={name}
      />
  )
}

export default Input