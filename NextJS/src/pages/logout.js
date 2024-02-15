import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('email');
      axios.get('http://127.0.0.1:3000/admin/signout')
        .then(() => {
          localStorage.removeItem('isLoggedIn');
          //localStorage.setItem('isLoggedIn', 'false');

        })
        .catch((error) => {
          console.log('Error occurred during logout:', error);
        });
      router.push('/');
    }
  }, []);

  return null;

}
