import React from "react";
import Input from "../../components/Input";

interface InputWrapper {
  label: string;
  value: string;
  placeholder: string;
  setValue: (value: React.SetStateAction<string>) => void;
}

const InputWrapper = ({ label, value, setValue, placeholder }: InputWrapper) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h1>{label}</h1>
        <button
          className="shadow-lg bg-red-500 rounded-md px-2 py-1"
          onClick={() => setValue("")}
        >
          Clear
        </button>
      </div>
      <Input value={value} setValue={setValue} placeholder={placeholder} name={value} />
    </div>
  );
};

export default InputWrapper;
