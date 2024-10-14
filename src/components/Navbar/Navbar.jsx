import { IoIosArrowDown, IoIosSearch, IoMdMenu } from 'react-icons/io';
import './Navbar.css'
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { BsCupHot, BsHandbag } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { IoCameraOutline, IoDocumentTextOutline, IoLocationOutline, IoTicketOutline } from 'react-icons/io5';
import { CiCreditCard1 } from 'react-icons/ci';
import { RiCustomerServiceLine } from 'react-icons/ri';



const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 30) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const upLeftNavLinks = <>
        <a className={`${isOpen && "flex items-center gap-2 p-3 border-b hover:bg-gray-100"}`} href=''>{isOpen && <IoCameraOutline className='text-xl' />} <span>photo service</span></a>
        <a className={`${isOpen && "flex items-center gap-2 p-3 border-b hover:bg-gray-100"}`} href=''>{isOpen && <IoTicketOutline className='text-xl' />} <span>tickets & deals</span></a>
        <a className={`${isOpen && "flex items-center gap-2 p-3 border-b hover:bg-gray-100"}`} href=''>{isOpen && <IoDocumentTextOutline className='text-xl' />} <span>insurances</span></a>
        <a className={`${isOpen && "flex items-center gap-2 p-3 border-b hover:bg-gray-100"}`} href=''>{isOpen && <BsCupHot className='text-xl' />} <span>inspirations</span></a>
    </>
    const upRightNavLInks = <>
        <a className={`${isOpen && "flex items-center gap-2 p-3 border-b hover:bg-gray-100"}`} href=''>{isOpen && <IoLocationOutline className='text-xl' />} <span>shops</span> </a>
        <a className={`${isOpen && "flex items-center gap-2 p-3 border-b hover:bg-gray-100"}`} href=''>{isOpen && <CiCreditCard1 className='text-xl' />} <span>customer card</span> </a>
        <a className={`${isOpen && "flex items-center gap-2 p-3 border-b hover:bg-gray-100"}`} href=''>{isOpen && <RiCustomerServiceLine className='text-xl' />} <span>customer service</span> </a>
    </>
    return (
        <nav className='max-w-screen-2xl'>

            {/* ------------------ large screen -------------------*/}
            <div className='hidden lg:block'>
                {/* upper nav */}
                <div className={`w-[90%] mx-auto flex justify-between border-b py-2 transition-transform duration-300 ${isSticky ? '-translate-y-full' : 'translate-y-0'}`}>
                    <ul className="flex">
                        {upLeftNavLinks}
                    </ul>
                    <ul className="flex">
                        {upRightNavLInks}
                    </ul>
                </div>

                {/* fixed nav */}
                <div className={`py-3 z-[900] bg-white transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 shadow-lg' : 'relative'}`}>
                    <div className='w-[90%] mx-auto flex justify-between items-center gap-16'>
                        {/* logo + menu icon + categories */}
                        <div className='flex gap-10'>
                            <img className="w-14" src="/logo.svg" alt="hema logo" />
                            <div className="flex items-center gap-3">
                                <IoMdMenu className='text-3xl' />
                                <div className="flex items-center gap-1">
                                    <p>categories </p>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                        </div>
                        {/* search bar */}
                        <div className="relative flex-1">
                            <input type="text" name="search" id="search" className="w-full rounded-3xl p-2 bg-gray-100" placeholder="What are you looking for?" />
                            <IoIosSearch className="text-xl absolute right-3 top-1/2 transform -translate-y-1/2" />
                        </div>

                        {/* right side buttons */}
                        <div className="flex items-center justify-end gap-5">
                            <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg duration-500"><FaRegUser /> <p>log in</p></button>
                            <div className='hover:bg-gray-100 p-2 rounded-xl'>
                                <FaRegHeart className='text-lg' />
                            </div>
                            <div className='hover:bg-gray-100 p-2 rounded-xl'>
                                <BsHandbag className='text-lg'/>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            {/*------------------- small & medium screen -------------*/}
            <div className='block lg:hidden py-2 space-y-3 fixed w-full bg-white shadow-md z-[900]'>
                <div className='relative'>
                    {/* main nav */}
                    <div className='w-[90%] mx-auto flex justify-between'>
                        <img className="w-14" src="/logo.svg" alt="hema logo" />
                        <div className='hidden md:block'>
                            <div className="relative flex-1">
                                <input type="text" name="search" id="search" className="w-full rounded-3xl p-2 bg-gray-100" placeholder="What are you looking for?" />
                                <IoIosSearch className="text-xl absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-5">
                            <div className='hover:bg-gray-100 p-2 rounded-xl'>
                                <FaRegHeart />
                            </div>
                            <div className='hover:bg-gray-100 p-2 rounded-xl'>
                                <BsHandbag />
                            </div>
                            <div>
                                <IoMdMenu onClick={() => setIsOpen(!isOpen)} className='text-3xl' />
                            </div>
                        </div>
                    </div>
                    {/* search box */}
                    <div className={`w-[90%] mx-auto block md:hidden ${isSticky ? 'hidden' : 'block'} mt-5`}>
                        <div className="relative flex-1">
                            <input type="text" name="search" id="search" className="w-full rounded-3xl p-2 bg-gray-100" placeholder="What are you looking for?" />
                            <IoIosSearch className="text-xl absolute right-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>

                    {/* opened sidebar */}
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} upLeftNavLinks={upLeftNavLinks} upRightNavLInks={upRightNavLInks}></Sidebar>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;