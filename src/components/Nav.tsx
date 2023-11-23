import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-4 bg-slate-500 px-4 py-2 content">
			<li><NavLink to="/todos">Todos</NavLink></li>
			<li><NavLink to="/nouns">Nouns</NavLink></li>
			<li><NavLink to="/employees">Employees</NavLink></li>
			<li><NavLink to="/employees2">Employees2</NavLink></li>
			<li><NavLink to="/employees3">Employees3</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
	</nav>;
};
