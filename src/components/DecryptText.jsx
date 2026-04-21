import React, { useState, useEffect } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#_";

function DecryptText({ text, className, delay = 0 }) {
  // Start fully scrambled
  const [displayText, setDisplayText] = useState(() => 
    text.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join("")
  );

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    const startSequence = () => {
      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2.5; // Controls speed of reveal (higher denominator = slower)
      }, 35);
    };

    let timeout;
    if (delay > 0) {
      timeout = setTimeout(startSequence, delay);
    } else {
      startSequence();
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return <span className={`font-mono text-white ${className || ""}`}>{displayText}</span>;
}

export default DecryptText;
