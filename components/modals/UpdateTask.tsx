import useModal from "@/hooks/useModal";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { updateTask } from "@/app/task/action";

const UpdateTask = () => {
    const { modalType, isModalOpen, closeModal, data } = useModal();
    const toggleModal = isModalOpen && modalType === "updateTaskModal";

    const [id, setId] = useState("");
    const [task, setTask] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (toggleModal && data) {
            setId(data.id);
            setTask(data.task);
            setStatus(data.status);
        }
    }, [toggleModal, data]);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("taskId", id);
        formData.append("task", task);
        formData.append("status", status);

        try {
            const response = await updateTask(formData);
            if (response?.success) {
                setTask("");
                setStatus("");
                closeModal();
            } else {
                console.error("Failed to update task:", response?.error);
            }
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const handleClose = () => {
        setTask("");
        setStatus("");
    };

    return (
        <Dialog open={toggleModal} onOpenChange={closeModal}>
            <DialogContent className="bg-slate-900 text-white border-none">
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold">
                        Update Task
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-base font-medium flex flex-col gap-3">
                    <input type="text" name="taskId" value={id} hidden={true} readOnly />

                    <Label htmlFor="task">Task</Label>
                    <Input
                        type="text"
                        placeholder="Update Task"
                        name="task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />

                    <Label htmlFor="status">Status</Label>
                    <Select
                        name="status"
                        value={status}
                        onValueChange={setStatus}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="in-progress">
                                    In-Progress
                                </SelectItem>
                                <SelectItem value="block">Block</SelectItem>
                                <SelectItem value="done">Done</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </DialogDescription>
                <DialogFooter className="flex flex-col gap-2 md:gap-0 md:flex-row">
                    <Button
                        variant="secondary"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" onClick={handleClose}>
                            Cancel
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateTask;
