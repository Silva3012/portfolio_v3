export default function Footer() {
    return (
    <>
      <style jsx>
        {`
        hr {
              border: none;
              background-color: #9B9C9D;
              height: 1px;
              width: 80%;
              margin: 0 auto;
            }

        @media screen and (max-width: 768px) {
          hr {
              width: 100%;
            }
          }

        .footer-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 2rem 0;
            background-color: #090D0A;
        }

        .footer-container p {
          font-size: 0.8rem;
          color: #9B9C9D;
        }

        .footer-container .social_icons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0 1rem;
        }

        .footer-container .social_icons a {
          color: #9B9C9D;
          font-size: 1.5rem;
          transition: all 0.5s ease-in-out;
        }

        .footer-container .social_icons a:hover {
          color: #DADADB;
        }
        `}
      </style>
      {/* Horizontal line */}
        <hr/>
        {/* Footer container */}
        <div className="footer-container">
          {/* Copyright text */}
          <p>
            © {new Date().getFullYear()} Ntsika's Portfolio
          </p>
          {/* Social icons */}
          <div className="social_icons">
            <a
              href="https://twitter.com/SilvaBeatzSA"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://github.com/Silva3012"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ntsika-silvano-a66863106/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
    </>
  )
}