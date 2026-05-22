import  { useRef } from "react";

function Refernce() {

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Enter your name"
        ref={inputRef}
      />

      <button onClick={focusInput}>
        Click
      </button>

    </div>
  );
}

export default Refernce;