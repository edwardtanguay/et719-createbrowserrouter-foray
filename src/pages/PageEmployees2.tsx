import { useEffect, useState } from "react";
import axios from "axios";
import { IEmployee } from "../interfaces";
import { CgSpinnerTwo } from "react-icons/cg";
import { NavLink } from "react-router-dom";

export const PageEmployees2 = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([]);

	useEffect(() => {
		setTimeout(async () => {
			const _employees = (
				await axios.get(
					"https://edwardtanguay.vercel.app/share/employees.json"
				)
			).data;
			setEmployees(_employees);
		}, 2000);
	}, []);

	return (
		<>
			<p className="sysmessage">
				This page has a mock wait time to emulate a slow-loading page. The spinner uses the classic useEffect solution and so has nothing to do with React Router or createBrowserRouter.
			</p>
			{employees.length === 0 ? (
				<CgSpinnerTwo className="spinner text-8xl text-gray-700" />
			) : (
				<>
					<h2 className="mb-3 text-2xl">
						There are {employees.length} employees:
					</h2>
					<ul className="list-disc ml-5">
						{employees.map((employee) => {
							return (
								<li key={employee.employeeID}>
							<NavLink className="underline" to={`/employee/${employee.employeeID}`}>
							{employee.firstName} {employee.lastName}</NavLink>
								</li>
							);
						})}
					</ul>
				</>
			)}
		</>
	);
};
