import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import CreateTask from "./CreateTask";
import TaskAction from "./TaskAction";
import { tasks } from "@/app/task/action";

const TaskTable = async () => {
    const { data } = await tasks();

    return (
        <div className="xl:w-1/2 flex flex-col gap-1">
            <CreateTask />
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
                    {data?.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell>{task.id}</TableCell>
                            <TableCell className="capitalize">{task.task}</TableCell>
                            <TableCell className="capitalize">{task.status}</TableCell>
                            <TableCell className="flex gap-5">
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
            </Table>
        </div>
    );
};

export default TaskTable;
