import "./Footer.css";

function Footer(props) {
    return (
      <footer className="footer">
        <div className="footer__copyright">Developed by YuRo711</div>
        <div className="footer__year">{new Date().getFullYear()}</div>
      </footer>
    );
  }
  
  export default Footer;
  