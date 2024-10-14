/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FaChevronRight, FaRegHeart, FaRegUser } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

const Sidebar = ({ isOpen, setIsOpen, upLeftNavLinks, upRightNavLInks }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className={`${isOpen ? 'right-0 top-0' : '-right-full top-0'} w-full h-full duration-500 ease-in-out fixed bg-white z-50 overflow-y-auto`}>

            {/* logo + search bar + close button */}
            <div className='flex items-center justify-between gap-5'>
                <img className="w-14" src="/logo.svg" alt="hema logo" />
                <div className=''>
                    <div className="relative flex-1">
                        <input type="text" name="search" id="search" className="w-full rounded-3xl p-2 bg-gray-100" placeholder="search..." />
                        <IoIosSearch className="text-xl absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <RxCross2 onClick={() => setIsOpen(!isOpen)} className='text-3xl' />
                </div>
            </div>
            {/* categories */}
            <div>
                {
                    categories.map(cat => <div key={cat.id} className='flex border-b justify-between items-center p-2 hover:bg-gray-100 duration-500'>
                        <div className='flex items-center gap-3'>
                            <img className='w-16 rounded-full' src={cat.image} alt="" />
                            <p>{cat.category}</p>
                        </div>
                        <FaChevronRight />
                    </div>)
                }
            </div>
            {/* My Hema */}
            <div className="flex flex-col p-3 mt-5">
                <h2 className='font-bold text-2xl'>My HEMA</h2>
                <div className="flex items-center gap-2 hover:bg-gray-100 p-3  duration-500 border-b mt-2"><FaRegUser /> <p>log in</p></div>
                <div className='hover:bg-gray-100 p-3  flex items-center gap-2 border-b'>
                    <FaRegHeart />
                    <p>favorites</p>
                </div>
            </div>

            {/* More hema */}
            <div className="flex flex-col gap-5 p-2 mt-5">
                <h2 className='font-bold text-2xl'>More HEMA</h2>

                <div className='rounded-xl flex flex-col'>
                    {upLeftNavLinks}
                    {upRightNavLInks}
                </div>
            </div>
        </div>

    );
};

export default Sidebar;