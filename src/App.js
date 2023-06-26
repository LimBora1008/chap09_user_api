// 루트 컴포넌트
import { AppBar,Toolbar, Typography } from '@mui/material';
import './App.css';
import UserList from './component/UserList';

function App() {
  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">
            User List
          </Typography>
        </Toolbar>
      </AppBar>
      <UserList />
    </div>
  );
}

export default App;
