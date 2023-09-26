import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="px-16 flex items-center h-16 border-b gap-6">
        <Link
          className="px-2 py-1 hover:bg-slate-300 rounded-md transition-colors duration-200"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="px-2 py-1 hover:bg-slate-300 rounded-md transition-colors duration-200"
          href={"/todos"}
        >
          Todos
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
