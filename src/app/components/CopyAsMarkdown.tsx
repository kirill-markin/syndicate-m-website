"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_LABEL = "copy as markdown";

// Fallback for contexts where the async Clipboard API is unavailable.
// The textarea must own both focus and the selection, or execCommand
// copies whatever text the user happens to have selected on the page.
function legacyCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  document.getSelection()?.removeAllRanges();
  textarea.focus({ preventScroll: true });
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  try {
    return document.execCommand("copy");
  } finally {
    textarea.remove();
  }
}

const CopyAsMarkdown = ({ markdown }: { markdown: string }) => {
  const [label, setLabel] = useState(DEFAULT_LABEL);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    let copied = false;
    try {
      await navigator.clipboard.writeText(markdown);
      copied = true;
    } catch {
      try {
        copied = legacyCopy(markdown);
      } catch {
        copied = false;
      }
    }
    setLabel(copied ? "copied!" : "copy failed");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setLabel(DEFAULT_LABEL), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="hover:text-foreground hover:underline transition-colors cursor-pointer"
    >
      {label}
    </button>
  );
};

export default CopyAsMarkdown;
