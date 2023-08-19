import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

function NumKey() {
  const [input, setInput] = useState('');

  const onKeyPress = (button) => {
    if (!isNaN(button)) {
      setInput(input + button);
    }
  };

  const onChange = (input) => {
    // This function is called whenever the keyboard input changes
    // You can handle the input change here if needed
  };

  return (
    <div>
      <input type="text" value={input} readOnly />
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={{
          default: ['1 2 3', '4 5 6', '7 8 9', '0 {bksp}'],
        }}
      />
    </div>
  );
}

export default NumKey;
