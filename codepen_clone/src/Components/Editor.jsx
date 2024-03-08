import React, { useEffect, useState } from 'react'
import '../index.css'
import useLocalStorage from '../storage';

export default function Editor() {
   const [html,sethtml] = useLocalStorage("html","");
   const [js,setjs] = useLocalStorage("js","");
   const [css,setcss] = useLocalStorage("css","");
   const [codepencode,setcodepencode] = useState("");

   useEffect(()=>{
    const timeout =setTimeout(()=>{
        setcodepencode(`
        <html>
        <style>${css}</style>
        <script>${js}</script>
        <body>${html}</body>
        </html>
        `)
    },200)
    return()=> clearTimeout(timeout)
   },[html,css,js]

   )
  return (
    <div className='wrapper'>
    <div className='header'>
        <span>Codepen_Clone</span>
    </div>
    <div className='input-cover'>

        <textarea value={html} type='text' placeholder='Html' onChange={(e) =>{sethtml(e.target.value)}} className='input' />   
        <div className='width'/>
        <textarea value={css} type='text' placeholder='Css' onChange={(e) =>{setcss(e.target.value)}} className='input'/>
        <div className='width'/>
        <textarea value={js} type='text' placeholder='Js' onChange={(e) =>{setjs(e.target.value)}} className='input'/>
        </div>
        <div className='output'>
            <iframe
                  srcDoc={codepencode}
                  title='output'
                  sandbox='allow-script'
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  />
        </div>
      
    </div>
  )
}
