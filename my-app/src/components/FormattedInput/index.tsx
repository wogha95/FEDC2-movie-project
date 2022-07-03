import { useEffect, useRef, useState } from "react";
import "./index.css";

const FormattedInput = () => {
  const [value, setValue] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const formatInput = useRef<HTMLInputElement>(null);
  const handler = (event: any) => {
    const {
      value: changedValue,
      selectionStart: cursor,
    }: {
      value: string;
      selectionStart: number;
    } = event.target;
    const replacedValue = changedValue.replace(/[^0-9]/g, "");
    if (11 < replacedValue.length) return;

    if (cursor === 4 || cursor === 9)
      setCursorPosition(cursor + (changedValue.length - value.length));
    else setCursorPosition(cursor);
    setValue(getFormattedValue(replacedValue));
  };

  const getFormattedValue = (nums: string) => {
    let formattedValue = nums.substring(0, 3);
    if (3 < nums.length) formattedValue += "-" + nums.substring(3, 7);
    if (7 < nums.length) formattedValue += "-" + nums.substring(7);
    return formattedValue;
  };

  useEffect(() => {
    const target = formatInput.current as HTMLInputElement;
    target.setSelectionRange(cursorPosition, cursorPosition);
  }, [value]);

  return (
    <input
      ref={formatInput}
      type="text"
      value={value}
      onChange={handler}
      autoFocus
    />
  );
};

export default FormattedInput;
