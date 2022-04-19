import { useState } from 'react'

import './App.css'
import {Flex} from "./component/flex"
import {Buttons} from "./component/button";
// import { Button } from 'antd';
import 'antd/dist/antd.css';
function App() {
  const [theme, setTheme] = useState("dark")

  return (
    <div className="App">
    

     <Buttons background="blue">Primary Button</Buttons>
     <Buttons background="white">Default Button</Buttons>
     <Buttons background="none">Dashed Button</Buttons>
   
     <br />
  
     <Buttons border="none">Text Button</Buttons>
     <Buttons border="none"><a>Link Button</a></Buttons>
    
  {/* <Flex>
    <div>one</div>
    <div>two</div>
    <div>three</div>
  </Flex> */}

   
    </div>
  )
}

export default App;
