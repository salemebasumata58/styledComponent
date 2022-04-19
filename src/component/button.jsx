
import styled from "styled-components"


const Buttons = styled.button `
    background-color: transparent;
   
    width: 180px;
    height:60px ;
    border: 2px ${(props)=>props.background==="none" ? "dashed" : "solid"} lightgray ;
    border: ${(props)=>props.border==="none" ? "none" : ""};
    border-radius: 4px;
    padding: 5px;
    padding-top: 8px;
    text-align: center;
    font-size: 22px;
    cursor: pointer;
    color:${(props)=> (props.background==="blue" ? "white" : "black")};
    background:${(props)=>props.background};
    margin: 10px;
   
    
    &:hover{
        box-shadow:lightgray 0 3px 8px;
    }

`;

export{Buttons};