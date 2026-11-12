import hero from "../assets/hero.png";

const HeroSection = () => {
    return (
        <section className="w-full px-6 md:px-20 py-14 md:py-18 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* left side */}
            <div className="w-full md:w-1/2 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                    Build Your Ideal <br />
                    <span className="bg-linear-to-r from-[#FF5E1E] via-[#D926A9] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button className="px-6 py-3 rounded-lg font-medium text-sm text-white bg-linear-to-r from-[#FF6A1A] to-[#EC407A] hover:opacity-90 transition shadow-sm cursor-pointer">
                        Explore Technologies
                    </button>
                    <button className="px-8 py-3 rounded-lg font-medium text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition cursor-pointer">
                        Learn More
                    </button>
                </div>
            </div>

            {/* right side */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img 
                    src={hero} 
                    alt="Development Stack Illustration" 
                    className="w-full max-w-md lg:max-w-lg object-contain"
                />
            </div>
        </section>
    );
};

export default HeroSection;