import styled from '@emotion/styled';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
};

import React from 'react';

export default function TextInput({ errorMessage, ...props }: TextInputProps) {
  return (
    <TextInputWrapper>
      <TextInputField hasError={!!errorMessage} {...props} />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </TextInputWrapper>
  );
}

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: 8px;
`;

const TextInputField = styled.input<{ hasError: boolean }>`
  display: flex;
  height: 60px;
  padding: 0px 16px;
  align-self: stretch;
  align-items: center;

  border-radius: 12px;
  border: ${({ hasError }) =>
    hasError
      ? '1px solid var(--Color-Foundation-Feedback-error, #ed1b23)'
      : '1px solid  var(--Color-Foundation-Gray_Scale-Input_line, #D5DAE0)'};
  background: var(--colors-nutral-white-white-main, #fff);

  color: var(--Color-Foundation-Black_Scale-normal, #191f28);

  /* Body/B2_Body 18 */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  letter-spacing: -0.36px;

  ::placeholder {
    color: var(--Color-Foundation-Gray_Scale-Placeholder, #a2abb5);
    /* Body/B2_Body 18 */
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
  }

  &:focus-visible {
    border-radius: 12px;
    border: 1px solid var(--Color-Foundation-Primary_Strong-Cyan-primary_strong-cyan-500, #0cc);
    background: var(--colors-nutral-white-white-main, #fff);
    outline: 0px;
  }
`;

const ErrorText = styled.label`
  color: var(--Color-Foundation-Feedback-error, #ed1b23);
  /* Body/B3_Body 16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.32px;
`;
