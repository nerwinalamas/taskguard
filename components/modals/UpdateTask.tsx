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

const UpdateTask = () => {
    const { modalType, isModalOpen, closeModal, data } = useModal();
    const toggleModal = isModalOpen && modalType === "updateTaskModal";

    const [updateTask, setUpdateTask] = useState("");
    const [updateStatus, setUpdateStatus] = useState("");

    useEffect(() => {
        if (toggleModal && data) {
            setUpdateTask(data.title);
            setUpdateStatus(data.status)
        }
    }, [toggleModal, data]);

    const handleSubmit = () => {
        setUpdateTask("");
        setUpdateStatus("");
        closeModal();
    };

    const handleClose = () => {
        setUpdateTask("");
        setUpdateStatus("");
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
                    <div className="space-y-2">
                        <Label htmlFor="task">Task</Label>
                        <Input
                            type="text"
                            placeholder="Update Task"
                            name="task"
                            value={updateTask}
                            onChange={(e) => setUpdateTask(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select value={updateStatus} onValueChange={setUpdateStatus}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="in-progress">In-Progress</SelectItem>
                                    <SelectItem value="block">Block</SelectItem>
                                    <SelectItem value="done">Done</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
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
