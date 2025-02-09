import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './components/Users';
import { PostList, PostEdit, PostCreate, PostShow } from './components/Posts';
import jsonServerProvider from 'ra-data-simple-rest';
import Dashboard from './components/Dashboard';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './components/Theme';
import authProvider from './components/AuthProvider';
import ThemeToggle from './components/ThemeToggle';

const dataProvider = jsonServerProvider('http://localhost:3001');

const App = () => {
  const [darkMode, setDarkMode] = React.useState(localStorage.getItem('theme') === 'dark');

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        dashboard={Dashboard}
        darkMode={darkMode}
        toggleTheme={() => setDarkMode(!darkMode)}
      >
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} />
      </Admin>
      <ThemeToggle />
    </ThemeProvider>
  );
};

export default App;