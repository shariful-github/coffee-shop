import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData();
    const { _id, coffeeName, chef, supplier, taste, category, details, photoUrl } = loadedCoffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();

        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const updatedCoffee = { coffeeName, chef, supplier, taste, category, details, photoUrl }

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee successfully updated!',
                        icon: 'success',
                        confirmButtonText: 'Okey'
                    })
                }
            })
    }

    return (
        <div className="grid place-items-center h-screen">
            <div className="w-3/4 bg-[#F4F3F0] mx-auto rounded-md px-20 py-16">
                <h3 className="text-center text-3xl font-bold text-stone-600">Update a Coffee</h3>
                <p className="w-3/4 mx-auto text-center py-2">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.</p>
                <form onSubmit={handleUpdateCoffee} action="">
                    {/* Name & cheff row */}
                    <div className="grid grid-cols-2">
                        <label className="form-control w-full px-2">
                            <div className="label">
                                <span className="label-text font-semibold">Name</span>
                            </div>
                            <input defaultValue={coffeeName} type="text" name="coffeeName" placeholder="Enter coffee name" className="input input-bordered w-full" required />
                        </label>
                        <label className="form-control w-full px-2">
                            <div className="label">
                                <span className="label-text font-semibold">Chef</span>
                            </div>
                            <input defaultValue={chef} name="chef" type="text" placeholder="Enter coffee cheff" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    {/* supplier & taste row */}
                    <div className="grid grid-cols-2">
                        <label className="form-control w-full px-2">
                            <div className="label">
                                <span className="label-text font-semibold">Supplier</span>
                            </div>
                            <input defaultValue={supplier} type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" required />
                        </label>
                        <label className="form-control w-full px-2">
                            <div className="label">
                                <span className="label-text font-semibold">Taste</span>
                            </div>
                            <input defaultValue={taste} type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    {/* category & details row */}
                    <div className="grid grid-cols-2">
                        <label className="form-control w-full px-2">
                            <div className="label">
                                <span className="label-text font-semibold">Category</span>
                            </div>
                            <input defaultValue={category} type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" required />
                        </label>
                        <label className="form-control w-full px-2">
                            <div className="label">
                                <span className="label-text font-semibold">Details</span>
                            </div>
                            <input defaultValue={details} type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    {/* photo url row */}
                    <label className="form-control w-full px-2">
                        <div className="label">
                            <span className="label-text font-semibold">Photo</span>
                        </div>
                        <input defaultValue={photoUrl} type="text" name="photoUrl" placeholder="Enter photo url" className="input input-bordered w-full" required />
                    </label>
                    {/* coffee button */}
                    <div className="px-2 mt-4">
                        <input className="btn w-full px-2 bg-[#D2B48C] hover:bg-[#ad9678]" type="submit" value="Update Coffee" required />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;