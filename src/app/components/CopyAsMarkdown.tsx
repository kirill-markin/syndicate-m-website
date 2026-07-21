"use client";

import { useState } from "react";

const DEFAULT_LABEL = "copy as markdown";

const CopyAsMarkdown = ({ markdown }: { markdown: string }) => {
  const [label, setLabel] = useState(DEFAULT_LABEL);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setLabel("copied!");
    } catch {
      setLabel("copy failed");
    }
    setTimeout(() => setLabel(DEFAULT_LABEL), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="hover:text-foreground hover:underline transition-colors cursor-pointer"
    >
      {label}
    </button>
  );
};

export default CopyAsMarkdown;
