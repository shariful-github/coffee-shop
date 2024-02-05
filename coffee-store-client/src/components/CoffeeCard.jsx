import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, coffeeName, chef, supplier, taste, category, details, photoUrl } = coffee;

    const handleDelete = (_id) => {
        console.log('delete clicked');
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    console.log('yes clicked')
                    fetch(`http://localhost:5000/coffee/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount === 1) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Coffee has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            });
    }

    return (
        <div className="card lg:card-side shadow-xl bg-[#F5F4F1]">
            <figure><img className="" src={photoUrl} alt="Album" /></figure>
            <div className="mr-auto my-auto border-red-400">
                <h2 className="font-bold inline">Name: </h2> <span className="">{coffeeName}</span> <br />
                <h2 className="font-bold inline">Category: </h2><span>{category}</span><br />
                <h2 className="font-bold inline">Supplier: </h2><span>{supplier}</span><br />
                <h2 className="font-bold inline">Taste: </h2><span>{taste}</span>
            </div>
            <div className="join join-vertical items-center my-auto mr-10">
                <button className="px-1 py-1 rounded-sm bg-[#D2B48C] text-white mb-2"><MdRemoveRedEye /></button>
                <Link to={`http://localhost:5173/updatecoffee/${_id}`}>
                    <button className="px-1 py-1 rounded-sm bg-[#3C393B] text-white mb-2"><MdModeEdit /></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="px-1 py-1 rounded-sm bg-[#EA4744] text-white"><AiFillDelete /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;