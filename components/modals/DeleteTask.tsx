import useModal from "@/hooks/useModal";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "../ui/dialog";
import { useEffect, useState } from "react";
import { deleteTask } from "@/app/task/action";

const DeleteTask = () => {
    const { modalType, isModalOpen, closeModal, data } = useModal();
    const toggleModal = isModalOpen && modalType === "deleteTaskModal";
    
    const [deleteTaskId, setDeleteTaskId] = useState("");

    useEffect(() => {
        if (toggleModal && data) {
            setDeleteTaskId(data.id);
        }
    }, [toggleModal, data]);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("taskId", deleteTaskId);

        try {
            const response = await deleteTask(formData);
            if (response?.success) {
                closeModal();
            } else {
                console.error("Failed to delete task:", response?.error);
            }
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <Dialog open={toggleModal} onOpenChange={closeModal}>
            <DialogContent className="bg-slate-900 text-white border-none">
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold text-red-600">
                        Delete Task
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-base font-medium">
                    Are you sure you want to delete this permanently?
                    <input
                        type="text"
                        name="taskId"
                        value={deleteTaskId}
                        hidden={true}
                        readOnly
                    />
                </DialogDescription>
                <DialogFooter className="flex flex-col gap-2 md:gap-0 md:flex-row">
                    <Button
                        variant="secondary"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Delete
                    </Button>
                    <DialogClose asChild>
                        <Button type="button">Cancel</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteTask;
