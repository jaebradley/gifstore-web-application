import {
  refreshCredentials as refreshCredentialsRequest,
} from './client/authentication';

export default async function refreshCredentials() {
  const response = await refreshCredentialsRequest(window.localStorage.getItem('refreshToken'));
  const authToken = response.headers['x-gifstore-auth-token'];
  const refreshToken = response.headers['x-gifstore-refresh-token'];
  window.localStorage.setItem('authToken', authToken);
  window.localStorage.setItem('refreshToken', refreshToken);
}
