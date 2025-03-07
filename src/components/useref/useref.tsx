import { useRef } from "react";


const DomRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    inputRef.current?.focus();
  }
return<>
<input type="text" ref={inputRef} />
<button onClick={handleClick}>focus me!</button>
</>
};

export default DomRef;