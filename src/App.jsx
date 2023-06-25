import { useState } from "react";
import './app.css'

import { marked } from "marked";


function App() {
   const [content, setContent] = useState(`
   # This is a Heading h1
   ## This is a Heading h2 
   ###### This is a Heading h6
   
   ## Emphasis
   
   *This text will be italic*  
   _This will also be italic_
   
   **This text will be bold**  
   __This will also be bold__
   
   _You **can** combine them_
   
   ## Lists
   
   ### Unordered
   
   * Item 1
   * Item 2
   * Item 2a
   * Item 2b
   
   ### Ordered
   1. Item 1
   1. Item 2
   1. Item 3
     1. Item 3a
     1. Item 3b
   
   ## Images
   
   ![This is a alt text.](pubic/fcc-logo.svg)
   
   ## Links
   
   You may be using [Markdown Live Preview](https://markdownlivepreview.com/).
   
   ## Blockquotes
   
   > Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
   >
   >> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
   
   ## Tables
   | Left columns  | Right columns |
  | ------------- |:-------------:|
  | left foo      | right foo     |
  | left bar      | right bar     |
  | left baz      | right baz     |
  
  ## Blocks of code
  
  \`\`\`
  let message = 'Hello world';
  alert(message);
  \`\`\`
  
  ## Inline code
  
  This web site is using \`markedjs/marked\`.
   
   `);


  return (
    <div className="app">
      <div className="editor">
      <h2>Markdown editor</h2>
      <textarea cols="30" rows="10" id="editor" onChange={(e)=> setContent(e.target.value)}  value={content} ></textarea>
      </div>
      <div className="previewer">
      <h2>Markdown preview</h2>
      <div id="preview"  dangerouslySetInnerHTML={{__html: marked(content)}}></div>
      </div>
    </div>
  )
}

export default App
