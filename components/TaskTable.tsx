import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CreateTask from "./CreateTask";
import { tasks } from "@/app/task/action";
import TaskTableBody from "./TaskTableBody";
import TaskTablePagination from "./TaskTablePagination";

const TaskTable = async () => {
    const { data } = await tasks();

    return (
        <div className="xl:w-1/2 flex flex-col gap-5">
            <CreateTask />
            <Table className="text-slate-100">
                <TableHeader>
                    <TableRow className="hidden lg:w-full lg:grid lg:grid-cols-4">
                        <TableHead>id</TableHead>
                        <TableHead>Task</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TaskTableBody data={data || []} count={data?.length || 0} />
            </Table>
            {data && data.length > 10 && (
                <TaskTablePagination
                    data={data || []}
                    count={data?.length || 0}
                />
            )}
        </div>
    );
};

export default TaskTable;
