import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
}

function TypingText({ text }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <p>{displayText}</p>;
}

export default TypingText;
