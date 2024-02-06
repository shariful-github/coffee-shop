import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-center bg-red-200 py-3 font-semibold">
            <NavLink className='mr-8' to={'/addcoffee'}>Add Coffee</NavLink>
            <NavLink className='mr-8' to={'/signin'}>Signin</NavLink>
            <NavLink className='mr-8' to={'/signup'}>Sign Up</NavLink>
            <NavLink className='mr-8' to={'/user'}>User</NavLink>
        </div>
    );
};

export default Header;