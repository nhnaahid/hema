
const Footer = () => {
    return (
        <footer className="mt-64 border-t">
            <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between mt-16">
                <div className="w-1/3 space-y-3">
                    <h1 className="text-2xl font-bold">follow HEMA</h1>
                    <div className=" flex items-center gap-2">
                        <img className="w-10" src="/public/images/footer/fb.png" alt="" />
                        <img className="w-10" src="/public/images/footer/x.png" alt="" />
                        <img className="w-8" src="/public/images/footer/wa.png" alt="" />
                        <img className="w-10" src="/public/images/footer/ig.png" alt="" />
                        <img className="w-10" src="/public/images/footer/pin.png" alt="" />
                        <img className="w-10" src="/public/images/footer/yt.png" alt="" />
                    </div>
                </div>

                <div className="w-1/3 space-y-3">
                    <h1 className="text-2xl font-bold">easy payment*</h1>
                    <div className=" flex items-center gap-2">
                        <img className="w-8" src="/public/images/footer/master.png" alt="" />
                        <img className="w-8" src="/public/images/footer/visa.png" alt="" />
                        <img className="w-7" src="/public/images/footer/ae.png" alt="" />
                        <img className="w-8" src="/public/images/footer/pp.png" alt="" />
                    </div>
                </div>

                <div className="w-1/3 space-y-3">
                    <h3 className="text-2xl font-bold">always up to date with our promotions</h3>
                    <p>Subscribe to the HEMA newsletter. The latest (online) offers several times a week. Get 10% discount immediately after signing up. You can always unsubscribe.</p>
                    <div className="flex items-center gap-2">
                        <input type="emai" name="" id="" placeholder="email address*" className="border p-2 rounded-lg" />
                        <button className="bg-[#00838c] text-white p-2 rounded-lg"> to register</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;