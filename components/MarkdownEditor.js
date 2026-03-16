"use client";

import { useState, useEffect, useRef } from "react";

const TOOLBAR_ACTIONS = [
  { label: "B", title: "Bold", wrap: ["**", "**"], placeholder: "bold text" },
  { label: "I", title: "Italic", wrap: ["*", "*"], placeholder: "italic text" },
  { label: "H1", title: "Heading 1", prefix: "# " },
  { label: "H2", title: "Heading 2", prefix: "## " },
  { label: "H3", title: "Heading 3", prefix: "### " },
  { label: "Link", title: "Link", template: "[text](url)" },
  { label: "Code", title: "Inline Code", wrap: ["`", "`"], placeholder: "code" },
  { label: "List", title: "Unordered List", prefix: "- " },
];

const SAMPLE = `# Welcome to Markdown Editor

Write **bold**, *italic*, or \`inline code\`.

## Features
- Live HTML preview
- Toolbar shortcuts
- Word count

[Visit webpifyy](https://webpifyy.vercel.app)
`;

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(SAMPLE);
  const [html, setHtml] = useState("");
  const [markedLoaded, setMarkedLoaded] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedMd, setCopiedMd] = useState(false);
  const textareaRef = useRef(null);
  const markedRef = useRef(null);

  useEffect(() => {
    const id = "marked-script";
    if (document.getElementById(id)) {
      if (window.marked) { markedRef.current = window.marked; setMarkedLoaded(true); }
      return;
    }
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
    script.onload = () => {
      markedRef.current = window.marked;
      setMarkedLoaded(true);
    };
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (markedLoaded && markedRef.current) {
      try {
        setHtml(markedRef.current.parse(markdown));
      } catch {}
    }
  }, [markdown, markedLoaded]);

  function wordCount() {
    return markdown.trim() ? markdown.trim().split(/\s+/).length : 0;
  }

  function insertAtCursor(action) {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = markdown.slice(start, end);
    let newText = markdown;
    let newPos = start;

    if (action.template) {
      newText = markdown.slice(0, start) + action.template + markdown.slice(end);
      newPos = start + action.template.length;
    } else if (action.prefix) {
      const lineStart = markdown.lastIndexOf("\n", start - 1) + 1;
      newText = markdown.slice(0, lineStart) + action.prefix + markdown.slice(lineStart);
      newPos = start + action.prefix.length;
    } else if (action.wrap) {
      const inner = selected || action.placeholder;
      newText = markdown.slice(0, start) + action.wrap[0] + inner + action.wrap[1] + markdown.slice(end);
      newPos = start + action.wrap[0].length + inner.length + action.wrap[1].length;
    }

    setMarkdown(newText);
    setTimeout(() => {
      ta.focus();
      ta.setSelectionRange(newPos, newPos);
    }, 0);
  }

  async function copyHtml() {
    await navigator.clipboard.writeText(html);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  }

  async function copyMd() {
    await navigator.clipboard.writeText(markdown);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  }

  return (
    <div className="mded-wrap">
      <div className="mded-toolbar">
        {TOOLBAR_ACTIONS.map((action) => (
          <button
            key={action.label}
            className="mded-toolbar-btn"
            title={action.title}
            onClick={() => insertAtCursor(action)}
          >
            {action.label}
          </button>
        ))}
      </div>

      <div className="mded-panels">
        <div className="mded-panel">
          <div className="mded-panel-label">Markdown</div>
          <textarea
            ref={textareaRef}
            className="mded-textarea"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div className="mded-panel">
          <div className="mded-panel-label">Preview</div>
          <div
            className="mded-preview"
            dangerouslySetInnerHTML={{ __html: html || "<p>Start typing to see preview...</p>" }}
          />
        </div>
      </div>

      <div className="mded-footer">
        <span className="mded-word-count">{wordCount()} words</span>
        <div className="mded-footer-actions">
          <button className="mded-copy-btn" onClick={copyMd}>{copiedMd ? "Copied!" : "Copy Markdown"}</button>
          <button className="mded-copy-btn" onClick={copyHtml}>{copiedHtml ? "Copied!" : "Copy HTML"}</button>
        </div>
      </div>
    </div>
  );
}
