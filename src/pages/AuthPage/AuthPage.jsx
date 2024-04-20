import { useState } from 'react';
import '../AuthPage/AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';
import CardLogo from '../../assets/CardLogo.png';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="page-wrapper">
      <header className="oai-header">
        <img src={ CardLogo } alt="CardifyLogo" />
      </header>
      <main className="main-container">
        <section className="content-wrapper">
            { showSignUp ?
                <SignUpForm setUser={setUser} />
                :
                <LogInForm setUser={setUser} />
            }
            <p className="other-page">
                Already have an account? 
                <span className="other-page-link" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</span>
            </p>
        </section>
      </main>
      <footer className="oai-footer">
        <p className="footer-text">Created by: John Vu, Jeffrey Luo, Dylan Tran, Daniel Coyle</p>
      </footer>
    </div>
  );
}