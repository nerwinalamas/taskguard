import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const Home = () => {
    return (
        <main className="min-h-screen mt-32 flex items-start justify-center">
            <div className="w-1/2 flex flex-col gap-1">
                <form className="w-full flex items-center justify-end gap-2">
                    <input
                        type="text"
                        name="task"
                        id="task"
                        required
                        placeholder="Create Task"
                        className="p-2"
                    />
                    <button className="p-2 font-semibold bg-slate-100 text-slate-900">
                        Create
                    </button>
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
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Create Table</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell className="flex gap-5">
                                <button>Edit</button>
                                <button>Delete</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </main>
    );
};

export default Home;
