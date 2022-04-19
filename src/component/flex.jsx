import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    justify-content: center;

    & div:nth-child(odd){
        color: red;
        border: 1px solid teal;
    }

    & div:hover{
        color: #000102;
    }
`