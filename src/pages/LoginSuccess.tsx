import { authStore } from '../stores/authStore';
import styled from '@emotion/styled';
import Button from '../components/Button';
import { useAuthRefresh } from '../hooks/useAuth';
import { setAccessToken } from '../utils/axios-instance';
import { useNavigate } from 'react-router-dom';

export default function LoginSuccess() {
  const navigate = useNavigate();

  const { loginResponse, logout } = authStore();

  const { mutate: tokenRefresh } = useAuthRefresh();

  const handleRefreshTokenClick = () => {
    tokenRefresh();
  };

  const handleLogoutClick = () => {
    logout();
    setAccessToken('');
    navigate('/');
  };

  return (
    <LoginSuccessWrapper>
      {`${loginResponse}`}
      <Button label="토큰 리프레쉬" onClick={handleRefreshTokenClick} />
      <Button label="로그 아웃" onClick={handleLogoutClick} />
    </LoginSuccessWrapper>
  );
}

const LoginSuccessWrapper = styled.div`
  display: flex;
  padding: 200px;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
