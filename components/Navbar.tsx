import Logout from "@/app/(auth)/logout/page";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="max-w-screen-2xl px-10 py-5 flex items-center justify-between text-white">
            <Link href="/">
                <h1>TaskGuard</h1>
            </Link>
            <div className="flex items-center gap-5">
                <Link href="/profile">Profile</Link>
                <Logout />
            </div>
        </div>
    );
};

export default Navbar;
