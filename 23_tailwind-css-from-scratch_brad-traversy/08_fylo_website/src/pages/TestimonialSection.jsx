import TestimonialCart from "../components/TestimonialCart";

const TestimonialSection = () => {
    return (
        <section id="testimonials" className="bg-gray-50 dark:bg-dark-blue-0">
            <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
                <div className="relative flex w-full flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12">
                    <img
                        src="/images/bg-quotes.png"
                        alt=""
                        className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
                    />
                    <TestimonialCart
                        text="Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine."
                        img="/images/profile-1.jpg"
                        name="Satish Patel"
                        position="Founder & CEO. Huddle"
                    />
                    <TestimonialCart
                        text="Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine."
                        img="/images/profile-2.jpg"
                        name="Bruce McKenzie"
                        position="Founder & CEO. Huddle 2"
                    />
                    <TestimonialCart
                        text="Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine."
                        img="/images/profile-3.jpg"
                        name="Eva Boyd"
                        position="Founder & CEO. Huddle 3"
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
