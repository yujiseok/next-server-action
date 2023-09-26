import { deleteTodo } from "@/action";

interface Props {
  id: number;
}

const DeleteButton = ({ id }: Props) => {
  return (
    <form action={deleteTodo}>
      <input type="hidden" name="id" value={id} />
      <button className="px-2 py-1 bg-slate-300 rounded-md hover:shadow-sm text-sm">
        Delete
      </button>
    </form>
  );
};
export default DeleteButton;
