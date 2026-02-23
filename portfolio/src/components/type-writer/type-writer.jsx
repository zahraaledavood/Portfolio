import { useState, useEffect, useRef } from "react";

export default function TypeWriter({
  texts = ["I am Zahra", "My friends call me Lia"],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseAfterType = 1800,
  pauseAfterDelete = 400,
  className = "",
  cursor = true,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const isPausedRef = useRef(false);

  useEffect(() => {
    if (isPausedRef.current) return;

    const currentText = texts[textIndex];

    if (!isDeleting && charIndex < currentText.length) {

      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentText.length) {

      isPausedRef.current = true;
      const timeout = setTimeout(() => {
        isPausedRef.current = false;
        setIsDeleting(true);
      }, pauseAfterType);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      isPausedRef.current = true;
      const timeout = setTimeout(() => {
        isPausedRef.current = false;
        setIsDeleting(false);
        setTextIndex((i) => (i + 1) % texts.length);
      }, pauseAfterDelete);
      return () => clearTimeout(timeout);
    }
  }, [
    charIndex,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseAfterType,
    pauseAfterDelete,
  ]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            backgroundColor: "currentColor",
            marginLeft: "2px",
            verticalAlign: "text-bottom",
            animation: "blink 0.8s step-end infinite",
          }}
        />
      )}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}