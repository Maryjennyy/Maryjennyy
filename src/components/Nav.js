import { Link } from 'react-scroll';
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
        <ul>
            <li>
              <Link activeClass="active" smooth spy to="home">
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                About me
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="educ">
                Education
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="cert">
                Certificates
              </Link>
            </li>
        </ul>
    </div>
  );
}

export default Nav;
