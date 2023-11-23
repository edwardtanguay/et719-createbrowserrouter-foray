/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IEmployee } from "../interfaces";
import { CgSpinnerTwo } from "react-icons/cg";

export const PageEmployee = () => {
	const [employee, setEmployee] = useState<IEmployee | null>(null);
	const { id } = useParams();

	useEffect(() => {
		setTimeout(async () => {
			const _employees: IEmployee[] = (
				await axios.get(
					"https://edwardtanguay.vercel.app/share/employees.json"
				)
			).data;
			if (id) {
				const _employee = _employees.find(
					(m) => m.employeeID === Number(id)
				);
				if (_employee) {
					setEmployee(_employee);
				}
			}
		}, 2000);
	}, []);

	return (
		<>
			<p className="sysmessage">
			This page shows a single employee based on the id in the URL. It simulates a load time but loading and spinner is a classic useEffect solution and so has nothing to do with createBrowserRouter.
			</p>
			{employee ? (
				<>
					<h2 className="text-4xl">
						{employee.firstName} {employee.lastName}
					</h2>
					<p className="text-xl italic">{employee.title}</p>
				</>
			) : (
				<CgSpinnerTwo className="spinner text-8xl text-gray-700" />
			)}
		</>
	);
};
