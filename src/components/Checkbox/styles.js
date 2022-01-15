import styled, { keyframes } from "styled-components";

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  margin: 6px 0;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

export const Indicator = styled.div`
  width: 18px;
  height: 18px;
  background: ${props => (props.checked ? "#B4DDC1" : "#FFFFFF")};
  position: absolute;
  top: 0em;
  left: -1.6em;
  border: 2px solid #B4DDC1;
  border-radius: 0.2em;

  ${Input}:not(:disabled):checked & {
    background: #B4DDC1;
  }

  ${Label}:hover && {  
    background: ${props => (props.checked ? "#006437" : "#FFFFFF")};
    border: 2px solid #006437;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0em;
    left: 4px;
    width: 20%;
    height: 55%;
    border: solid #FFFFFF;
    border-width: 0 3px 3px 0;
    animation-name: ${rotate};
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  &::disabled {
    cursor: not-allowed;
  }
`;
