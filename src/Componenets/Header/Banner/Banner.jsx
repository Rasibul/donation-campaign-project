const Banner = () => {
    return (
        <div className="bg-[url('../../../public/images/Rectangle-4281.png')] bg-cover bg-center">
            <section className="py-28 sm:py-40 bg-white bg-opacity-95 flex flex-col justify-center items-center gap-8">
                <h1 className="font-bold text-2xl md:text-4xl text-center text-[#000]">I Grow By Helping People In Need</h1>
                <div>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Serche here..."
                        className=" bordered border-2 py-2 px-3 roundeds-s-lg" />
                        <button type="submit" className="px-3 py-2 text-white bg-[#FF444A] font-semibold">Search</button>
                </div>
            </section>
        </div>
    );
};

export default Banner;