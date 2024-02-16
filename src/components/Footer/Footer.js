import "./Footer.css";

function Footer(props) {
    return (
      <div className="footer">
        <div className="footer__copyright">Developed by Yuri Rokhlin</div>
        <div className="footer__year">{new Date().getFullYear()}</div>
      </div>
    );
  }
  
  export default Footer;
  