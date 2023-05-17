// Import Link for client-side navigation
import Link from 'next/link';

// Navbar function component
export default function Header() {
  return (
    <header>
      <style jsx>{`
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          background-color: #090D0A;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #D8D9D7;
        }

        .nav-btn-container {
          display: flex;
          align-items: center;
        }

        .nav-btn {
          margin-left: 1rem;
          background-color: #F28705;
          color: #1D1E20;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }
        .nav-btn:hover {
          background-color: #DADADB;
        }
      `}</style>
      <nav className="nav-container">
        <div className="logo">Ntsika's Portfolio</div>
        <div className="nav-btn-container">
          <Link href="/">
            <p className="nav-btn">Home</p>
          </Link>
          <Link href="/about">
            <p className="nav-btn">About</p>
          </Link>
          <Link href="/projects">
            <p className="nav-btn">Projects</p>
          </Link>
          <Link href="/contact">
            <p className="nav-btn">Contact</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
