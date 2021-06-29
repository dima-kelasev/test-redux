import styled from "styled-components";


export const List = styled.li`
        color: palevioletred;
        cursor: pointer;
        transition: .5s linear;

        &:hover {
          color: #5a0b25;
          transition: .5s linear;
        }
    `

export const Delete = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
`