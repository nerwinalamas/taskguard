"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createTask } from "@/app/task/action";
import { FormEvent, useState } from "react";

const CreateTask = () => {
    const [task, setTask] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("task", task);

        try {
            const response = await createTask(formData);
            if (response?.success) {
                setTask("");
            } else {
                console.error("Failed to create task:", response?.error);
            }
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex items-center justify-end gap-2"
        >
            <Input
                type="text"
                name="task"
                id="task"
                placeholder="Create Task"
                required
                className="w-60 text-slate-900"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button type="submit" variant="secondary">
                Create
            </Button>
        </form>
    );
};

export default CreateTask;
