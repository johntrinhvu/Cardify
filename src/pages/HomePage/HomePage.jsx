import { Link } from 'react-router-dom';

export default function NewOrderPage() {
    return (
        <div>
            <h1>Home Page!</h1>
            <Link to="/card/new" className="navbar-link">BizCard</Link>
        </div>
    );
  }