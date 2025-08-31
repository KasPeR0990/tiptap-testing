"use client";

import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { MenuBar } from "./menu-bar";

const extensions = [StarterKit, TextStyleKit];

export default function RichTextEditor() {
  const editor = useEditor({
    extensions,
    content: `<p>Start typing...</p>`,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "min-h-[156px] py-2 px-3 ",
      },
    },
  });
  return (
    <div className="border rounded-md">
      <div className="border-b">
        <MenuBar editor={editor}></MenuBar>
      </div>
      <div className="min-h-[144px]">
        <EditorContent editor={editor}></EditorContent>
      </div>
    </div>
  );
}
