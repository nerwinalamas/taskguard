"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import useModal from "@/hooks/useModal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const TaskTable = () => {
    const { openModal } = useModal();
    const [task, setTask] = useState("");

    return (
        <div className="w-1/2 flex flex-col gap-1">
            <form className="w-full flex items-center justify-end gap-2">
                <Input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="Create Task"
                    required
                    className="w-60"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <Button variant="secondary">Create</Button>
            </form>
            <Table className="text-slate-100">
                <TableHeader>
                    <TableRow>
                        <TableHead>id</TableHead>
                        <TableHead>Task</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array(10)
                        .fill(null)
                        .map((data) => (
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>Create Table</TableCell>
                                <TableCell>Pending</TableCell>
                                <TableCell className="flex gap-5">
                                    <button
                                        onClick={() =>
                                            openModal("updateTaskModal")
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            openModal("deleteTaskModal")
                                        }
                                    >
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TaskTable;
