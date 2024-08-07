import React, { useRef } from 'react';

function FocusInput() {
  // Create a ref using useRef hook
  const inputRef = useRef(null);

  // Function to focus the input field
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Focus Input Example</h1>
      <input
        type="text"
        ref={inputRef} // Attach the ref to the input element
        placeholder="Click the button to focus"
      />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default FocusInput;