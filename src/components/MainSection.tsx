import React from 'react';
import CartSection from './CartSection';
import StacksSection from './StacksSection';

const MainSection = () => {
    return (
        <section>
            <div>
                <h2>Explore the Technologies</h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div>
                <StacksSection />
                <CartSection />
            </div>
        </section>
    );
};

export default MainSection;