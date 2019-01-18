import history from '../history';

function handleLogout() {
  window.localStorage.removeItem('authToken');
  history.push('/login');
}

export default handleLogout;
