"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const tasks = async () => {
    const supabase = await createClient();
    return await supabase.from("todos").select("*");
};

export const createTask = async (formData: FormData) => {
    const task = formData.get("task") as string;

    const supabase = await createClient();
    const { data, error } = await supabase
        .from("todos")
        .insert({ task })
        .single();

    if (error) {
        console.log("error creating task: ", error.message);
        return { success: false, error: error.message };
    }

    revalidatePath("/");
    return { success: true, data };
};

export const updateTask = async (formData: FormData) => {
    const id = formData.get("taskId") as string;
    const task = formData.get("task") as string;
    const status = formData.get("status") as string;

    const supabase = await createClient();
    const { error } = await supabase.from("todos").update({ task, status }).eq("id", id);

    if (error) {
        console.log("error updating task: ", error.message);
        return { success: false, error: error.message };
    }

	revalidatePath("/");
    return { success: true };
};

export const deleteTask = async (formData: FormData) => {
    const id = formData.get("taskId") as string;

    const supabase = await createClient();
    const { error } = await supabase.from("todos").delete().eq("id", id);

    if (error) {
        console.log("error deleting task: ", error.message);
        return { success: false, error: error.message };
    }

    revalidatePath("/");
    return { success: true };
};
