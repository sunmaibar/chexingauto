import React from "react"
import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  appearance: none;
  color: var(--white);
  background: var(--primary-500);
  border: none;
  border-radius: var(--borderRadius);
  letter-spacing: var(--letterSpacing);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  text-transform: capitalize;
  :hover {
    color: var(--white);
    background: var(--primary-700);
    box-shadow: var(--shadow-2);
  }
`

export default Button
