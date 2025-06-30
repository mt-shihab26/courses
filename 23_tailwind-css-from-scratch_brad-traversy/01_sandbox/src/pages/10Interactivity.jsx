const Interactivity = () => {
    return (
        <div>
            {/* Hover state styling */}
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:text-gray-300">
                Submit
            </button>
            {/* Focus state styling */}
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 focus:bg-green-500 focus:text-gray-300">
                Submit
            </button>
            {/* Active state styling */}
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 active:bg-yellow-500 active:text-gray-300">
                Submit
            </button>
            {/* Styling based on parent state */}
            <a className="group block max-w-xs max-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500">
                <h3 className="group-hover:text-white">Cart Title</h3>
                <p className="group-hover:text-white">This is the card text</p>
            </a>
            {/* Pseudo Classes */}
            <ul>
                <li className="first:bg-red-200 even:bg-green-500">Item 1</li>
                <li className="first:bg-red-200 even:bg-green-500 ">Item 2</li>
                <li className="first:bg-red-200 even:bg-green-500">Item 3</li>
                <li className="first:bg-red-200 even:bg-green-500">Item 4</li>
                <li className="first:bg-red-200 even:bg-green-500">Item 5</li>
                <li className="first:bg-red-200 even:bg-green-500">Item 6</li>
            </ul>
            {/* Appearance */}
            <select className="appearance-none">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            {/* Cursor */}
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-wait">
                Submit
            </button>
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-not-allowed">
                Submit
            </button>
            {/* User Select  */}
            <div className="select-none">Lorem ipsum dolor sit amet.</div>
            <div className="select-text">Lorem ipsum dolor sit amet.</div>
            <div className="select-all">Lorem ipsum dolor sit amet.</div>
            <div className="select-auto">Lorem ipsum dolor sit amet.</div>
            <a href="#item" className="block my-6">
                Got to item
            </a>
            {/* Smooth Scroll Example */}
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                nihil recusandae nam exercitationem quisquam dolorem debitis, ut
                sed optio nemo omnis iure pariatur expedita. Repellat quia
                voluptas harum obcaecati deserunt reprehenderit rerum iusto
                assumenda excepturi, ipsa sapiente aut, illum necessitatibus
                voluptate odit recusandae illo delectus quos. Ullam, error
                numquam. Consectetur blanditiis magnam, nam, placeat non rerum
                aspernatur neque quod nesciunt quaerat ipsa voluptate velit?
                Ullam, facere. Quas aliquid voluptate unde saepe incidunt quasi
                dignissimos libero suscipit, explicabo quod repudiandae numquam
                molestias sunt ab vitae nesciunt sequi cumque amet recusandae
                omnis eum eligendi aperiam ratione? Aspernatur ipsum fugiat
                reiciendis incidunt magnam odio accusantium rerum eius?
                Praesentium commodi, molestias quibusdam similique unde iste
                debitis quos consequatur voluptatum tenetur esse omnis quia
                totam amet veritatis odio maxime! Odit laborum maxime, voluptate
                explicabo totam perspiciatis qui omnis? Sit laborum consequatur
                commodi error minima officia aliquid laboriosam vel, ab
                suscipit. Omnis quod velit facilis ex, placeat nihil quam
                veritatis necessitatibus? Dolorem officia illum, ipsum cumque
                porro necessitatibus assumenda exercitationem eum odit itaque
                architecto adipisci hic iste quasi praesentium qui laboriosam
                unde nam! Reiciendis nulla recusandae quis quasi mollitia.
                Voluptatem adipisci vero eos itaque corporis fuga, pariatur
                laudantium non soluta illum repellat quam debitis, sint eveniet
                aperiam natus saepe. Deserunt maiores nobis ad! Optio iusto
                nulla dolorem eaque? Quae nulla corporis repudiandae excepturi
                veniam ipsum incidunt soluta impedit tenetur ab. Natus, veniam
                debitis repellat asperiores mollitia corrupti praesentium
                tenetur nobis fuga dolores ut quod exercitationem excepturi
                nulla. Suscipit, temporibus sapiente illo quas error ea eveniet
                facere obcaecati ipsa? Architecto porro ipsam labore tempora nam
                est voluptates ut aperiam dignissimos excepturi debitis dolores
                sapiente ad doloribus, dolorem, autem minima minus
                exercitationem nesciunt provident incidunt a magni, in
                accusamus? Doloremque veniam enim minus ab, non quae est
                repudiandae optio debitis? Aliquid harum culpa hic enim placeat
                corporis blanditiis id laborum magni consequuntur iste a
                reprehenderit, dicta illum nulla soluta sed beatae animi
                reiciendis quis laboriosam veniam! Cupiditate sequi ratione
                neque id maxime iusto eligendi, beatae impedit, ad doloremque
                nam deleniti fugit! Minima distinctio laboriosam quasi ipsa
                ullam nesciunt officia quis, impedit perspiciatis delectus
                voluptates? Error iure sapiente illo natus facilis rem obcaecati
                facere nostrum. Blanditiis facilis minima inventore neque
                aliquam autem saepe accusamus hic expedita! Dicta quidem cumque
                commodi, optio sunt quia nostrum nobis, eligendi sapiente, vel
                deleniti eum. Exercitationem tempora est nam deserunt
                voluptatibus. Optio perferendis debitis quia magni repellendus.
                Tempore illum nesciunt corporis, voluptatibus fugit ipsam.
            </p>
            <div id="item">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                in molestias, neque sunt iste illo sequi a distinctio
                repudiandae sapiente perspiciatis temporibus ratione maxime
                inventore? Totam, tenetur beatae. Ipsam reprehenderit unde ipsum
                nam nobis ipsa consectetur in officia vitae dolore, eius
                repellendus possimus veniam deleniti enim. Perferendis,
                exercitationem. Expedita, quibusdam.
            </div>
        </div>
    );
};

export default Interactivity;
