import { Editor, useEditorState } from "@tiptap/react";
import { Toggle } from "../ui/toggle";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Strikethrough as StrikethroughIcon,
  Code as CodeIcon,
  Eraser as EraserIcon,
  Trash2 as TrashIcon,
  Pilcrow as PilcrowIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List as ListIcon,
  ListOrdered as ListOrderedIcon,
  SquareCode as SquareCodeIcon,
  Quote as QuoteIcon,
  Minus as MinusIcon,
  CornerDownLeft as CornerDownLeftIcon,
  Undo2 as UndoIcon,
  Redo2 as RedoIcon,
} from "lucide-react";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
        isStrike: ctx.editor.isActive("strike") ?? false,
        canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
        isCode: ctx.editor.isActive("code") ?? false,
        canCode: ctx.editor.can().chain().toggleCode().run() ?? false,
        canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
        isParagraph: ctx.editor.isActive("paragraph") ?? false,
        isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
        isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
        isHeading4: ctx.editor.isActive("heading", { level: 4 }) ?? false,
        isHeading5: ctx.editor.isActive("heading", { level: 5 }) ?? false,
        isHeading6: ctx.editor.isActive("heading", { level: 6 }) ?? false,
        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
        isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
        isBlockquote: ctx.editor.isActive("blockquote") ?? false,
        canUndo: ctx.editor.can().chain().undo().run() ?? false,
        canRedo: ctx.editor.can().chain().redo().run() ?? false,
      };
    },
  });
  return (
    <div className="p-1 space-x-2 z-50 ">
      <Toggle
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editorState.canBold}
        className={editorState.isBold ? "is-active" : ""}
        aria-label="Bold"
        title="Bold"
      >
        <BoldIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editorState.canItalic}
        className={editorState.isItalic ? "is-active" : ""}
        aria-label="Italic"
        title="Italic"
      >
        <ItalicIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editorState.canStrike}
        className={editorState.isStrike ? "is-active" : ""}
        aria-label="Strikethrough"
        title="Strikethrough"
      >
        <StrikethroughIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editorState.canCode}
        className={editorState.isCode ? "is-active" : ""}
        aria-label="Inline code"
        title="Inline code"
      >
        <CodeIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        aria-label="Clear marks"
        title="Clear marks"
      >
        <EraserIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().clearNodes().run()}
        aria-label="Clear nodes"
        title="Clear nodes"
      >
        <TrashIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editorState.isParagraph ? "is-active" : ""}
        aria-label="Paragraph"
        title="Paragraph"
      >
        <PilcrowIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editorState.isHeading1 ? "is-active" : ""}
        aria-label="Heading 1"
        title="Heading 1"
      >
        <Heading1 />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editorState.isHeading2 ? "is-active" : ""}
        aria-label="Heading 2"
        title="Heading 2"
      >
        <Heading2 />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editorState.isHeading3 ? "is-active" : ""}
        aria-label="Heading 3"
        title="Heading 3"
      >
        <Heading3 />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editorState.isHeading4 ? "is-active" : ""}
        aria-label="Heading 4"
        title="Heading 4"
      >
        <Heading4 />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editorState.isHeading5 ? "is-active" : ""}
        aria-label="Heading 5"
        title="Heading 5"
      >
        <Heading5 />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editorState.isHeading6 ? "is-active" : ""}
        aria-label="Heading 6"
        title="Heading 6"
      >
        <Heading6 />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editorState.isBulletList ? "is-active" : ""}
        aria-label="Bullet list"
        title="Bullet list"
      >
        <ListIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editorState.isOrderedList ? "is-active" : ""}
        aria-label="Ordered list"
        title="Ordered list"
      >
        <ListOrderedIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editorState.isCodeBlock ? "is-active" : ""}
        aria-label="Code block"
        title="Code block"
      >
        <SquareCodeIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editorState.isBlockquote ? "is-active" : ""}
        aria-label="Blockquote"
        title="Blockquote"
      >
        <QuoteIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        aria-label="Horizontal rule"
        title="Horizontal rule"
      >
        <MinusIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().setHardBreak().run()}
        aria-label="Hard break"
        title="Hard break"
      >
        <CornerDownLeftIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editorState.canUndo}
        aria-label="Undo"
        title="Undo"
      >
        <UndoIcon />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editorState.canRedo}
        aria-label="Redo"
        title="Redo"
      >
        <RedoIcon />
      </Toggle>
    </div>
  );
};
