const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col-1">
                <a href="/">
                  <img src="/public/img/logo.png" />
                </a>
              </div>
              <div className="footer-col-2">
                <h3>Me encontras en</h3>
                <ul>
                  <li>Córdoba - Argentina</li>
                  <li>0351 - 155555555</li>
                  <li>decoideas@decoideas.com</li>
                </ul>
              </div>
              <div className="footer-col-3">
                <h3>Redes Sociales</h3>
                <ul>
                  <li>
                    <a
                      href="https://instagram.com/decoideasmariela?igshid=YmMyMTA2M2Y="
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li><a
                      href="https://www.facebook.com/decoideasmariela?mibextid=ZbWKwL"
                      target="_blank"
                    >
                      Facebook
                    </a></li>
                  <li> . </li>
                </ul>
              </div>
            </div>
            <hr />
            <p className="copyright">
              ©Copyright 2023. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
