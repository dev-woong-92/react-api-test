import React from 'react';
import styled from '@emotion/styled';

type ButtonProps = React.HTMLProps<HTMLButtonElement> & { label: string };

export default function Button({ ...props }: ButtonProps) {
  return (
    <ButtonWrapper onClick={props.onClick}>
      <ButtonLabel>{props.label}</ButtonLabel>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  display: flex;
  height: 80px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 12px;
  background: var(--Color-Foundation-Primary_Strong-Cyan-primary_strong-cyan-500, #0cc);
  &:hover {
    background: #4e5962;
  }
`;

const ButtonLabel = styled.label`
  color: var(--colors-nutral-white-white-main, #fff);

  /* Headline/H5_Headline 24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.48px;
`;
