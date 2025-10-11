
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="social-links">
                    <a
                        href="https://github.com/mkbello"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/muktar-bello"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                <p className="copyright">
                    © {new Date().getFullYear()} Muktar Bello. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
