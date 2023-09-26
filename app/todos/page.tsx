import { createTodo, getTodos } from "@/action";
import DeleteButton from "@/components/DeleteButton";
import SubmitButton from "@/components/SubmitButton";

const page = async () => {
  const todos = await getTodos();

  return (
    <section className="py-12 px-16">
      <div className="flex flex-col gap-8">
        <h1 className="text-lg text-gray-900">Todos</h1>

        <form action={createTodo} className="flex flex-col gap-4 max-w-sm">
          <input
            type="text"
            name="title"
            className="px-2 py-1 border-slate-300 border outline-none rounded-md"
            required
          />
          <SubmitButton />
        </form>

        <ul className="max-w-sm">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between mb-4">
              {todo.title} <DeleteButton id={todo.id} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default page;
