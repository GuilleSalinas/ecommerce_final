const Ofertas = () => {
  return (
    <>
      <section>
        {/* <!-- seccion ofertas --> */}
        <section className="offer" id="ofertas">
          <section className="small-container">
            <h2 className="title-offer">Oferta</h2>
            <div className="row">
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <img src="/public/img/ofertaExclusive.png" />
              </div>
              <div className="col-2" data-aos="zoom-in">
                <p className="font-medium text-3xl mb-5">
                  Disponible en varios tamaños
                </p>
                <h3 className="font-bold text-6xl mb-5 ">
                  Canasta porta objetos
                </h3>
                <p className="font-bold">
                  Canastas construidas en hilo blanco con terminaciones en cuero
                  para colocar todo tipo de objetos.
                  <br />
                </p>
                <a
                  href="https://instagram.com/decoideasmariela?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  className="btn"
                >
                  Mas ofertas en mis Redes &#8594;
                </a>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Ofertas;
