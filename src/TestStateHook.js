import React, { useState} from 'react';

export default function ExampleStateHook({ defaultName }) {
  // const [name, setName] = useState(defaultName);
  const name = useInputValue(defaultName)
  const address = useInputValue('Africa')

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // }
  return (
    <div>
      <div>
        Name: 
        {/* <input value={name} onChange={handleNameChange}/> */}
        <input {...name} />
      </div>
      <div>
        Address: 
        <input {...address} />
      </div>
    </div>
  )
} 

// custom hook to set input value state
function useInputValue(initValue) {
  const [value, setValue] = useState(initValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}