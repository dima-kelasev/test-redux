import styled from "styled-components";

 export const InputFeild = styled.input`
      border: 0;
      border-bottom: 1px solid #000;
      outline: none;
    `
export const Button = styled.button`
      background: transparent;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
      color: palevioletred;
      cursor: pointer;
      transition: .5s linear;
      &:hover {
        box-shadow: 1px 1px 26px 1px rgba(47,242,249,1);
        -webkit-box-shadow:1px 1px 26px 1px rgba(47,242,249,1);
        -moz-box-shadow:1px 1px 26px 1px rgba(47,242,249,1);
        transition: .5s linear;
      }
    `