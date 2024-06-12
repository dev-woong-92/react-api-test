import { useState } from 'react';
import styled from '@emotion/styled';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { LoginRequest } from '../interfaces/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthLogin } from '../hooks/useAuth';

export default function RootPage() {
  const navigate = useNavigate();

  const { mutate: login } = useAuthLogin();

  const [loginInfo, setLoginInfo] = useState<LoginRequest>({
    userId: '',
    password: '',
  });

  const [idErrorMessage, setIdErrorMessage] = useState<string | undefined>();
  const [pwErrorMessage, setPwErrorMessage] = useState<string | undefined>();

  const handleLoginButtonClick = () => {
    console.log(loginInfo);
    setIdErrorMessage(loginInfo.userId === '' ? '아이디를 입력해주세요' : '');
    setPwErrorMessage(loginInfo.password === '' ? '비밀번호를 입력해주세요' : '');
    if (loginInfo.userId !== '' && loginInfo.password !== '') {
      login(loginInfo, {
        onSuccess() {
          alert('로그인 성공');
          navigate('login-success');
        },
        onError(error) {
          alert(error);
        },
      });
    }
  };

  const handleUserIdChange = (userId: string) => {
    setLoginInfo({ ...loginInfo, userId: userId });
  };

  const handlePasswordChange = (password: string) => {
    setLoginInfo({ ...loginInfo, password: password });
  };

  return (
    <LoginArea>
      <HeaderText>로그인</HeaderText>
      <ContentArea>
        <InputArea>
          <TextInput
            placeholder="아이디를 입력해 주세요."
            errorMessage={idErrorMessage}
            onChange={(e) => handleUserIdChange(e.target.value)}
          />
          <TextInput
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            errorMessage={pwErrorMessage}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
        </InputArea>
        <Button label="로그인" onClick={handleLoginButtonClick} />
      </ContentArea>
    </LoginArea>
  );
}

const LoginArea = styled.div`
  display: flex;
  padding: 80px 0px 200px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 56px;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 588px;
  gap: 40px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`;

const HeaderText = styled.label`
  color: var(--Color-Foundation-Black_Scale-normal, #191f28);

  /* Headline/H1_Headline 40 */
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 56px */
  letter-spacing: -0.8px;
`;
