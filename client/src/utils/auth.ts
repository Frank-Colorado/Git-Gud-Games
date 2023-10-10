import decode from 'jwt-decode';

class AuthService {
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    try {
      const decoded = decode(token) as any;
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  login(idToken: string) {
    localStorage.setItem('jwtToken', idToken);
  }

  logout() {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }
}

export default new AuthService();
