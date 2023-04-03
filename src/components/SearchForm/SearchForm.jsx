import { useState } from "react";

export const SearchForm = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      onSubmit(value);
      e.target.reset();
      setValue('');
    };
  
    return (
     <form autoComplete="on" onSubmit={handleSubmit}>
       <input
        type="text"
        name="name"
        placeholder="Enter any film name"
        required
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" >
       Search
      </button>
    </form>
    );
};
