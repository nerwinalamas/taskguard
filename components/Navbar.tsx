"use client";

import Logout from "@/app/(auth)/logout/page";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const Navbar = () => {
    const [openSheet, setOpenSheet] = useState(false);

    return (
        <div className="max-w-screen-2xl p-4 lg:px-10 lg:py-5 flex items-center justify-between text-white">
            <Link href="/">
                <h1 className="text-xl font-bold">TaskGuard</h1>
            </Link>

            <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                <SheetTrigger>
                    <Menu size={25} className="lg:hidden" />
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="flex flex-col items-center justify-start border-none bg-slate-900 text-white"
                >
                    <SheetHeader className="w-full">
                        <Link href="/" onClick={() => setOpenSheet(false)}>
                            <h1 className="text-xl font-bold">TaskGuard</h1>
                        </Link>
                    </SheetHeader>
                    <ul className="w-full flex flex-col gap-5">
                        <Link
                            href="/profile"
                            className="font-semibold p-2"
                            onClick={() => setOpenSheet(false)}
                        >
                            Profile
                        </Link>
                        <li onClick={() => setOpenSheet(false)}>
                            <Logout />
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
            <div className="hidden lg:flex lg:items-center lg:gap-5">
                <Link href="/profile" className="font-semibold">
                    Profile
                </Link>
                <Logout />
            </div>
        </div>
    );
};

export default Navbar;
