const ContainerAndSpacing = () => {
    return (
        <>
            {/* Container  */}
            <div className="container mx-auto">
                <article>
                    <h3>Article One</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis fugiat ullam repellendus harum? Cupiditate
                        nihil mollitia, accusantium officiis ipsam quasi.
                        Perspiciatis cumque voluptatem enim. Nam facere
                        obcaecati ipsum error dolorem modi quae aliquid
                        inventore, nesciunt exercitationem similique harum animi
                        corporis odio doloremque, repellat quam, aut adipisci
                        labore impedit fuga ab!
                    </p>
                </article>
                {/* Margin */}
                <div className="bg-slate-200 m-3">Hello World</div>
                <div className="bg-slate-200 ml-4">Hello World</div>
                <div className="bg-slate-200 mr-4">Hello World</div>
                <div className="bg-slate-200 mt-4">Hello World</div>
                <div className="bg-slate-200 mb-4">Hello World</div>
                <div className="bg-slate-200 mt-[20px]">Hello World</div>
                {/* Padding */}
                <div className="bg-slate-200 p-3">Hello World</div>
                <div className="bg-slate-200 pl-4">Hello World</div>
                <div className="bg-slate-200 pr-4">Hello World</div>
                <div className="bg-slate-200 pt-4">Hello World</div>
                <div className="bg-slate-200 pb-4">Hello World</div>
                <div className="bg-slate-200 pt-[20px]">Hello World</div>
                {/* Space Between X */}
                <div className="flex my-4 space-x-5">
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                    <div>Item 5</div>
                    <div>Item 6</div>
                    <div>Item 7</div>
                </div>
                {/* Space Between Y */}
                <div className="flex flex-col my-4 space-y-8">
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                    <div>Item 5</div>
                    <div>Item 6</div>
                    <div>Item 7</div>
                </div>
            </div>
        </>
    );
};

export default ContainerAndSpacing;
