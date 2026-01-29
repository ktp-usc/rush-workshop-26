import { NavLink } from "react-router";

const Header = () => {
    const base = "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100";
    const active = "bg-gray-100";

    return (
        <header className="border-b">
            <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <div className="flex gap-2">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `${base} ${isActive ? active : ""}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `${base} ${isActive ? active : ""}`}
                    >
                        About
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;