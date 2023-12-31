import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserManager } from 'oidc-client-ts';
import SigninRedirect from './pages/SigninRedirect';
import SignoutRedirect from './pages/SignoutRedirect';
import Home from './pages/Home';

function App() {
  const userManager = new UserManager({
    authority: "https://example.accounts.justpass.me/openid/",
    client_id: "678605",
    redirect_uri: "http://localhost:3000/signin_redirect",
    popup_redirect_uri: "http://localhost:3000/signin_redirect",
    popup_post_logout_redirect_uri: "http://localhost:3000/signout_redirect",
    post_logout_redirect_uri: "http://localhost:3000/signout_redirect",
    scope: "openid profile"
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home userManager={userManager}/>} />
        <Route path="/signin_redirect" element={<SigninRedirect userManager={userManager}/>} />
        <Route path="/signout_redirect" element={<SignoutRedirect userManager={userManager} />} />
      </Routes>
    </Router>
  );
}

export default App;