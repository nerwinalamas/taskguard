"use client"

import DeleteTask from "@/components/modals/DeleteTask";
import UpdateTask from "@/components/modals/UpdateTask";

const ModalProvider = () => {
    return (
        <>
            <UpdateTask />
            <DeleteTask />
        </>
    );
};

export default ModalProvider;
