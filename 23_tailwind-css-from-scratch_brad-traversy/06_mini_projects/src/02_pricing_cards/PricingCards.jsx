import LowerItem from "./LowerItem.jsx";
import PurchaseButton from "./PurchaseButton.jsx";

const PricingCards = () => {
    const cards = [
        {
            name: "Basic",
            storage: [100, "GB"],
            rate: "$1.99/Month",
            msg1: "100 GB of storage",
            selected: false,
        },
        {
            name: "STANDARD",
            storage: [200, "GB"],
            rate: "$3.99/Month",
            msg1: "200 GB of storage",
            selected: true,
        },
        {
            name: "PREMIUM",
            storage: [2, "TB"],
            rate: "$8.99/Month",
            msg1: "2TB of storage",
            selected: false,
        },
    ];

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-800 text-white">
            <div className="my-6 flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`rounded-xl ${
                            card.selected === true
                                ? "bg-violet-700"
                                : "bg-slate-700"
                        }`}
                    >
                        <div className="mx-3 mt-3 rounded-t-xl bg-slate-800 p-8 text-center">
                            <div className="text-center uppercase">
                                {card.name}
                            </div>
                            <h2 className="mt-10 text-center font-serif text-5xl">
                                {card.storage[0]}
                                <span className="text-6xl">
                                    {card.storage[1]}
                                </span>
                            </h2>
                            <h3 className="mt-2 text-center">{card.rate}</h3>
                            <PurchaseButton selected={card.selected} />
                        </div>
                        <div className="border-t border-slate-700" />
                        <div className="mx-3  mb-3 rounded-b-xl bg-slate-800 p-8 text-center ">
                            <div className="flex flex-col space-y-2">
                                <LowerItem>{card.msg1}</LowerItem>
                                <LowerItem>{"Option to add members"}</LowerItem>
                                <LowerItem>{"Extra member benefits"}</LowerItem>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCards;
