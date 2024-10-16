import { FaArrowRight } from "react-icons/fa";

const NewLiving = () => {
    return (
        <div className="bg-[#0065ec] h-72 mt-64 flex justify-between w-[90%] mx-auto rounded-xl px-10 py-16">
            <div className="text-white font-bold space-y-5">
                <h1 className="text-5xl">new living & sleeping</h1>
                <p>accessories for a home that makes you happy</p>
            </div>
            <div className="flex items-start">
                <div className="text-white flex items-center gap-2 font-bold">
                    <p>View all</p>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
};

export default NewLiving;