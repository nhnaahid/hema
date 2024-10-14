// import './Footer.css'

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

            <div className="w-[90%] mx-auto grid grid-cols-4 mt-16 border-y py-10">
                <div className="flex flex-col space-y-1">
                    <h1 className="font-semibold text-2xl mb-3">popular categories</h1>
                    <a href="">women's clothing</a>
                    <a href="">children's clothing</a>
                    <a href="">baby clothes</a>
                    <a href="">bedding</a>
                    <a href="">home accessories</a>
                    <a href="">towels</a>
                    <a href="">window decoration</a>
                    <a href="">toys</a>
                    <a href="">pastry</a>
                    <a href="">coffee</a>
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className="font-semibold text-2xl mb-3">more for HEMA fans</h1>
                    <a href="">HEMA app</a>
                    <a href="">HEMA pass</a>
                    <a href="">read our brochures</a>
                    <a href="">recieve brochure via WhatsApp</a>
                    <a href="">HEMA on social nedia</a>
                    <a href="">HEMA redesign competition</a>
                    <a href="">HEMA photo service</a>
                    <a href="">HEMA gift cards</a>
                    <a href="">HEMA tickets</a>
                    <a href="">HEMA insurances</a>
                    <a href="">inspiration</a>
                    <a href="">news</a>
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className="font-semibold text-2xl mb-3">about HEMA</h1>
                    <a href="">about our company</a>
                    <a href="">working at HEMA</a>
                    <a href="">good idea from HEMA</a>
                    <a href="">news and press</a>
                    <a href="">HEMA history</a>
                    <a href="">HEMA business</a>
                    <a href="">customer service</a>
                    <a href="">terms and conditions</a>
                    <a href="">request gift card balance</a>
                    <a href="">partnerships</a>
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className="font-semibold text-2xl mb-3">international</h1>
                    <a href="">HEMA BElgium</a>
                    <a href="">HEMA GErmany</a>
                    <a href="">HEMA France</a>
                    <a href="">HEMA Austria</a>
                    <a href="">HEMA United Arab Emirates</a>
                </div>
            </div>

            <div className="flex items-center w-[90%] mx-auto p-5 border-b justify-between">
                <img src="/public/logo.svg" alt="" />
                <div>
                    <a className="border-r-2 px-2" href="">privacy statement</a>
                    <a className="border-r-2 px-2" href="">disclaimer</a>
                    <a className="border-r-2 px-2" href="">security</a>
                    <a className="border-r-2 px-2" href="">copyright</a>
                    <a className="border-r-2 px-2" href="">general terms and conditions</a>
                    <a className="border-r-2 px-2" href="">cookies</a>
                    <a className="border-r-2 px-2" href="">nothing 18</a>
                    <a className=" px-2" href="">home shopping guarantee</a>
                </div>
            </div>

            <div className="p-12 text-center text-gray-500 text-sm">
                <p>
                    HEMA BV, NDSM-straat 10,1033 SB Amsterdam <br />
                    Chamber of Commerce number: 34215639 <br />
                    IBAN: HEMA NL67INGB0651607663 <br />
                    VAT identification number: NL814217412B01 <br />
                    Customer service email address: hemaklantenservice@hema.nl 
                </p>
            </div>
        </footer>
    );
};

export default Footer;