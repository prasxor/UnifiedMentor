
"use client";

import type { Editor } from '@tiptap/react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import React, { useCallback } from 'react';
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, List, ListOrdered,
  Quote, Undo, Redo, Link as LinkIcon, Image as ImageIcon, Pilcrow, AlignLeft,
  AlignCenter, AlignRight, AlignJustify, Palette, Highlighter, Eraser, ChevronDown, Code, CodeSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Toggle } from '@/components/ui/toggle'; // Use Toggle for active states
import { ScrollArea } from '@/components/ui/scroll-area'; // Import ScrollArea
import { cn } from '@/lib/utils'; // Import cn utility


interface ToolbarProps {
  editor: Editor | null;
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('Image URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);


  if (!editor) {
    return null;
  }

  const ColorPicker = ({ type }: { type: 'text' | 'highlight' }) => {
    const handleColorChange = (color: string) => {
      if (type === 'text') {
        editor.chain().focus().setColor(color).run();
      } else {
        editor.chain().focus().toggleHighlight({ color }).run();
      }
    };

    const colors = ['#000000', '#e03131', '#2f9e44', '#1971c2', '#f08c00', '#862e9c', '#666666', '#FFFFFF']; // Example colors

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="w-8 h-8" aria-label={type === 'text' ? 'Text color' : 'Highlight color'}>
            {type === 'text' ? <Palette className="w-4 h-4" /> : <Highlighter className="w-4 h-4" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2">
          <div className="grid grid-cols-4 gap-1">
            {colors.map((color) => (
              <Button
                key={color}
                variant="outline"
                size="icon"
                className="w-6 h-6 p-0 border"
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
                aria-label={`Set ${type} color to ${color}`}
              />
            ))}
            <Input
              type="color"
              className="w-6 h-6 p-0 border-none cursor-pointer"
              onChange={(e) => handleColorChange(e.target.value)}
              aria-label={`Custom ${type} color`}
            />
          </div>
        </PopoverContent>
      </Popover>
    );
  };


  return (
    // Make toolbar sticky
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-card sticky top-0 z-10">
       {/* Formatting */}
      <Toggle
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        aria-label="Toggle bold"
         size="sm"
      >
        <Bold className="w-4 h-4" />
      </Toggle>
       <Toggle
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        aria-label="Toggle italic"
         size="sm"
      >
        <Italic className="w-4 h-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive('underline')}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        aria-label="Toggle underline"
         size="sm"
      >
        <UnderlineIcon className="w-4 h-4" />
      </Toggle>
       <Toggle
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        aria-label="Toggle strikethrough"
         size="sm"
      >
        <Strikethrough className="w-4 h-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive('code')}
        onPressedChange={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        aria-label="Toggle code"
         size="sm"
      >
        <Code className="w-4 h-4" />
      </Toggle>

       <Separator orientation="vertical" className="h-6 mx-1" />

      {/* Heading */}
       <Popover>
         <PopoverTrigger asChild>
           <Button variant="ghost" size="sm" className="px-2">
             Heading <ChevronDown className="w-4 h-4 ml-1" />
           </Button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-1">
           <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} disabled={!editor.can().setHeading({ level: 1 })}>H1</Button>
           <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} disabled={!editor.can().setHeading({ level: 2 })}>H2</Button>
           <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} disabled={!editor.can().setHeading({ level: 3 })}>H3</Button>
           <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => editor.chain().focus().setParagraph().run()} disabled={!editor.can().setParagraph()}>Paragraph</Button>
         </PopoverContent>
       </Popover>


       <Separator orientation="vertical" className="h-6 mx-1" />

       {/* Lists */}
       <Toggle
         pressed={editor.isActive('bulletList')}
         onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
         aria-label="Toggle bullet list"
         size="sm"
       >
         <List className="w-4 h-4" />
       </Toggle>
       <Toggle
         pressed={editor.isActive('orderedList')}
         onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
         aria-label="Toggle ordered list"
         size="sm"
       >
         <ListOrdered className="w-4 h-4" />
       </Toggle>
        <Toggle
          pressed={editor.isActive('blockquote')}
          onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
          aria-label="Toggle blockquote"
           size="sm"
        >
          <Quote className="w-4 h-4" />
       </Toggle>
        <Toggle
          pressed={editor.isActive('codeBlock')}
          onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
          aria-label="Toggle code block"
          size="sm"
        >
          <CodeSquare className="w-4 h-4" />
        </Toggle>

       <Separator orientation="vertical" className="h-6 mx-1" />

       {/* Alignment */}
       <Toggle
        pressed={editor.isActive({ textAlign: 'left' })}
        onPressedChange={() => editor.chain().focus().setTextAlign('left').run()}
        aria-label="Align left"
        size="sm"
       >
         <AlignLeft className="w-4 h-4" />
       </Toggle>
       <Toggle
        pressed={editor.isActive({ textAlign: 'center' })}
        onPressedChange={() => editor.chain().focus().setTextAlign('center').run()}
        aria-label="Align center"
        size="sm"
       >
         <AlignCenter className="w-4 h-4" />
       </Toggle>
       <Toggle
        pressed={editor.isActive({ textAlign: 'right' })}
        onPressedChange={() => editor.chain().focus().setTextAlign('right').run()}
        aria-label="Align right"
        size="sm"
       >
         <AlignRight className="w-4 h-4" />
       </Toggle>
       <Toggle
        pressed={editor.isActive({ textAlign: 'justify' })}
        onPressedChange={() => editor.chain().focus().setTextAlign('justify').run()}
        aria-label="Align justify"
        size="sm"
       >
         <AlignJustify className="w-4 h-4" />
       </Toggle>


       <Separator orientation="vertical" className="h-6 mx-1" />

       {/* Link & Image */}
       <Button variant="ghost" onClick={setLink} size="icon" className="w-8 h-8" aria-label="Set link">
         <LinkIcon className="w-4 h-4" />
       </Button>
        <Button
            variant="ghost"
            onClick={() => editor.chain().focus().unsetLink().run()}
            disabled={!editor.isActive('link')}
             size="icon" className="w-8 h-8" aria-label="Unset link"
        >
            <LinkIcon className="w-4 h-4 opacity-50" /> {/* Slightly different icon or style for unset */}
        </Button>
       <Button variant="ghost" onClick={addImage} size="icon" className="w-8 h-8" aria-label="Add image">
         <ImageIcon className="w-4 h-4" />
       </Button>

       <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Colors */}
        <ColorPicker type="text" />
        <ColorPicker type="highlight" />

       <Separator orientation="vertical" className="h-6 mx-1" />

       {/* History & Clear */}
       <Button variant="ghost" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} size="icon" className="w-8 h-8" aria-label="Undo">
         <Undo className="w-4 h-4" />
       </Button>
       <Button variant="ghost" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} size="icon" className="w-8 h-8" aria-label="Redo">
         <Redo className="w-4 h-4" />
       </Button>
        <Button
          variant="ghost"
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
           size="icon" className="w-8 h-8" aria-label="Clear formatting"
        >
          <Eraser className="w-4 h-4" />
        </Button>
    </div>
  );
};


interface RichTextEditorProps {
  content: string;
  onChange: (richText: string) => void;
  placeholder?: string;
  className?: string; // Accept className prop
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({ content, onChange, placeholder = "Start typing here...", className }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable default heading to use custom levels if needed
        // heading: false,
        // configure other StarterKit options if needed
        codeBlock: {
          HTMLAttributes: {
            class: 'bg-muted p-2 rounded-md text-sm my-2', // Example styling
          },
        },
         code: {
           HTMLAttributes: {
             class: 'bg-muted px-1 rounded-sm text-sm', // Inline code styling
           },
         },
         blockquote: {
           HTMLAttributes: {
             class: 'border-l-4 border-border pl-4 italic my-2', // Blockquote styling
           },
         },
      }),
      Underline,
       Link.configure({
        openOnClick: false, // Don't open links when clicking in editor
        autolink: true,
      }),
      Image.configure({
        inline: true, // Allow images inline
        allowBase64: true, // Allow base64 images if needed
         HTMLAttributes: {
          class: 'max-w-full h-auto my-2 rounded', // Style images
        },
      }),
      Placeholder.configure({ placeholder }),
      TextAlign.configure({
        types: ['heading', 'paragraph'], // Apply alignment to headings and paragraphs
      }),
      TextStyle, // Required for Color
      Color,
      Highlight.configure({ multicolor: true }), // Allow multiple highlight colors

    ],
    content: content,
    editorProps: {
      attributes: {
        // Remove min-h, keep base styling
        class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none p-4',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    // Apply external className and border styles here
    <div className={cn("border border-input rounded-lg overflow-hidden flex flex-col", className)}>
      <Toolbar editor={editor} />
      {/* Use ScrollArea to make the content scrollable and take remaining height */}
      <ScrollArea className="flex-1">
         <EditorContent editor={editor} />
      </ScrollArea>
    </div>
  );
};
