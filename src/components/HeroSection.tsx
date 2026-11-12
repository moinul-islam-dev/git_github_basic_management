import hero from "../assets/hero.png"

const HeroSection = () => {
    return (
        <section>
            {/* left side */}
            <div>
                <h1>
                    Build Your Ideal Development Stack
                </h1>

                <p>
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                
                <div>
                    <button>Explore Technologies</button>
                    <button>Learn More</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <img src={hero} alt="hero.png" />
            </div>
        </section>
    );
};

export default HeroSection;