import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h1 className="font-bold">
                Esto es la página de <br />
                <TypeAnimation
                  sequence={[
                    "Deco Ideas", // Types 'One'
                    3000, // Waits 3s
                    "", // Types ''
                    500, // Waits 1/2s
                    () => {
                      console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "1em",
                    display: "inline-block",
                    color: "#088178",
                  }}
                />
              </h1>
              <p className="text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur amet maxime autem veniam eligendi aliquid provident
                sint, vero maiores repellat.
              </p>
              <a
                href="https://instagram.com/decoideasmariela?igshid=YmMyMTA2M2Y="
                target="_blank"
                className="btn"
              >
                Instagram &#8594;
              </a>
            </div>
            <div className="col-2">
              <img src="/public/img/logo-1.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
