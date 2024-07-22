"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import TaskAction from "./TaskAction";
import { usePagination } from "@/hooks/usePagination";

const TaskTableBody = ({
    data,
    count,
}: {
    data: any[] | [];
    count: number;
}) => {
    const { dataPerPage } = usePagination(data, count);

    return (
        <TableBody className="mb-5 grid grid-cols-1 gap-5 w-full lg:gap-0">
            {dataPerPage?.map((task) => (
                <TableRow key={task.id} className="grid lg:grid-cols-4">
                    <TableCell>{task.id}</TableCell>
                    <TableCell className="capitalize">{task.task}</TableCell>
                    <TableCell className="capitalize">{task.status}</TableCell>
                    <TableCell className="flex justify-end gap-5 lg:justify-normal">
                        <TaskAction modalName="updateTaskModal" data={task}>
                            Edit
                        </TaskAction>
                        <TaskAction modalName="deleteTaskModal" data={task}>
                            Delete
                        </TaskAction>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default TaskTableBody;
