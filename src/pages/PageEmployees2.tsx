import { useEffect, useState } from "react";
import axios from "axios";
import { IEmployee } from "../interfaces";

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
		<p className="sysmessage">This page has a mock wait time so emulate a slow-loading page.</p>
			<h2 className="mb-3 text-2xl">
				There are {employees.length} employees loaded with React Router
				loader.
			</h2>
			<ul className="list-disc ml-5">
				{employees.map((employee) => {
					return (
						<li key={employee.employeeID}>
							{employee.firstName} {employee.lastName}
						</li>
					);
				})}
			</ul>
		</>
	);
};
