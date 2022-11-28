import React, { useState, useCallback } from "react";
import {KEY_RETURN} from 'keycode-js'

function InputBox(props) {
  const { addNewItem } = props;
  const [value, setValue] = useState("");
  const handleKeyUpEvent = useCallback((e) => {
    if (e.keyCode === KEY_RETURN) {
      //Add new todo here
      //Clear the text box
      addNewItem(e.target.value);
      setValue('');

      //console.log("KEY_RETURN pressed");
    }
  }, [addNewItem, setValue]);


  
const handleChangeEvent = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );
  
  return (
    <input
      type="text"
      classname="form-control add-todo"
      value={value}
      onKeyUp={handleKeyUpEvent}
      onChange={handleChangeEvent}
      placeholder="Add New"
    />
  );
}


export default InputBox;
