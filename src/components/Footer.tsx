import "components/Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>
          By{" "}
          <span>
            <a
              href="https://amandahinton.com/"
              aria-label="Amanda Hinton's website"
              target="blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Amanda Hinton
            </a>
          </span>
        </p>

        <p>
          See the code on{" "}
          <span>
            <a
              href="https://github.com/amandahinton/huetility"
              aria-label="Huetility's GitHub repository"
              target="blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
          </span>
        </p>

        <p>
          <span>
            <a
              href="https://amandahinton.com/resume"
              aria-label="Amanda Hinton's resume"
              target="blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              You should hire me!
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
