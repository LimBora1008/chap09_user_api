// 루트 컴포넌트
import React,{useState} from 'react';
import { AppBar,Toolbar, Typography, Button, Snackbar } from '@mui/material';
import UserList from './component/UserList';
import Login from './component/Login';

function App() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [loggedInUser, setLoggendInUser] = useState(null);

  // 메시지 내림
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);

  };

  // Login 컴포넌트에서 로그인에 성공한 후 호출됨
  const handleLogin = (user) => {
    alert('handleLogin');
    console.log('handleLogin', user);
    setLoggendInUser(user);
    setSnackbarMessage(`${user.name}님 환영합니다`);
    setSnackbarOpen(true);
  };

  // 로그아웃 함수
  const handleLogout = () => {
    setLoggendInUser(null);
    setSnackbarMessage("로그아웃 되었습니다");
    setSnackbarOpen(true);
  };

  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            User List
          </Typography>
          {loggedInUser ? (
            <>
              <Typography variant='h6' style={{marginRight: '10px'}}>
                {loggedInUser.name}님
              </Typography>
              <Button color='inherit' onClick={handleLogout}>로그아웃</Button>
            </>
          ) : (
            <Login
              setSnackbarOpen={setSnackbarOpen}
              setSnackbarMessage={setSnackbarMessage}
              onLogin={handleLogin}
            />
          )}
        </Toolbar>
      </AppBar>
      <UserList />
      {/* 메시지를 띄워주는 역할 open={true}되면 떠오름 */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
}

export default App;
