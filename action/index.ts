"use server";

import client from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;

  await client.todos.create({
    data: {
      title,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  revalidatePath("/todos");
};

export const getTodos = async () => {
  const todos = await client.todos.findMany();

  return todos;
};

export const deleteTodo = async (formData: FormData) => {
  const id = formData.get("id") as string;

  await client.todos.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/todos");
};
