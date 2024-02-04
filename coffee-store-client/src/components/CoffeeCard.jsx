import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
    return (
        <div className="card lg:card-side shadow-xl bg-[#F5F4F1]">
            <figure><img className="" src={coffee.photoUrl} alt="Album" /></figure>
            <div className="mr-auto my-auto border-red-400">
                <h2 className="font-bold inline">Name: </h2> <span className="">{coffee.coffeeName}</span> <br />
                <h2 className="font-bold inline">Category: </h2><span>{coffee.category}</span><br />
                <h2 className="font-bold inline">Supplier: </h2><span>{coffee.supplier}</span><br />
                <h2 className="font-bold inline">Taste: </h2><span>{coffee.taste}</span>
            </div>
            <div className="join join-vertical items-center my-auto mr-10">
                <button className="px-1 py-1 rounded-sm bg-[#D2B48C] text-white mb-2"><MdRemoveRedEye /></button>
                <button className="px-1 py-1 rounded-sm bg-[#3C393B] text-white mb-2"><MdModeEdit /></button>
                <button className="px-1 py-1 rounded-sm bg-[#EA4744] text-white"><AiFillDelete /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;