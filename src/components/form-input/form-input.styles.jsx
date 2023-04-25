import styled, { css } from "styled-components";

const subColor = 'rgb(49, 46, 46)';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${subColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1.1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 200ms ease all;

  ${(props) => props.shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin-top: 25px;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin-bottom: 30px;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const Alert = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 0px;
  font-weight: bold;
`;

