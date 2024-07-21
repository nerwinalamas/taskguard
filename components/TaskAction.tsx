"use client";

import useModal from "@/hooks/useModal";

const TaskAction = ({
    children,
    modalName,
    data
}: {
    children: React.ReactNode;
    modalName: string;
    data: any
}) => {
    const { openModal } = useModal();
    return <button onClick={() => openModal(modalName, data)}>{children}</button>;
};

export default TaskAction;
