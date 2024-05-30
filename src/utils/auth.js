import axios from 'axios';
import Router from 'next/router';

export async function renewToken() {
  try {
    const response = await axios.get('/api/token');
    if (response.status === 200) {
      return response.data.accessToken;
    }
  } catch (error) {
    console.error('Failed to renew token', error);
    Router.push('/api/auth/login');
  }
}
