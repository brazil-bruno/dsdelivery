import './style.css';
import { ReactComponent as GithubIcon } from './github.svg';

function Footer() {
    return (
        <footer className="main-footer">
            Click on the Github icon below to access the project
            <div className="footer-icons">
                <a href="https://github.com/brazil-bruno/dsdelivery" target="_new">
                    <GithubIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;