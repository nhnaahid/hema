

const HappyBanner = () => {
    return (
        <div className='bg-[#9c1aff] flex items-center justify-between w-[90%] mx-auto rounded-xl mt-16 px-10 pt-10 pb-36'>
            <div className='text-white w-1/3 space-y-5'>
                <h2 className='text-5xl font-bold'>20% off almost everything!</h2>
                <p>Today only until 23:59 20% discount on almost all items in the range. </p>
                <button className='border-2 w-3/5 rounded-lg p-3 font-bold hover:bg-white hover:text-black hover:border-white'>shop</button>
            </div>
            <figure className="w-3/5">
                <img src="/public/images/banner/happy.webp" alt="" />
            </figure>
        </div>
    );
};

export default HappyBanner;