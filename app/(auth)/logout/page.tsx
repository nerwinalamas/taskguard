import { logout } from "./action";

const Logout = () => {
    return (
        <button
            formAction={logout}
            className="p-2 font-semibold bg-slate-900 text-slate-100"
        >
            Logout
        </button>
    );
};

export default Logout;
