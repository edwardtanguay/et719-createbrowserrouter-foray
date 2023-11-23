import { useQuery } from "@tanstack/react-query";
import { IEmployee } from "../interfaces";
import * as appModel from "../appModel";
import { CgSpinnerTwo } from "react-icons/cg";

export const PageEmployees3 = () => {
	const employeesQuery = useQuery<IEmployee[]>({
		queryKey: ["employees"],
		queryFn: async () => appModel.getEmployees(),
	});

	if (employeesQuery.isLoading)
		return <CgSpinnerTwo className="spinner text-8xl text-gray-700" />;
	if (employeesQuery.isError)
		return <pre>{JSON.stringify(employeesQuery.error)}</pre>;

	return (
		<>
			<p className="sysmessage">
			This page is loaded by React Query which loads it once, and puts it in the cache so the next time the user clicks on the page, the data is already loaded. Compare this with the useEffect solution in Employees2 which loads the data every time the user clicks on the page.
			</p>
			{employeesQuery.data && (
				<>
					<h2 className="mb-3 text-2xl">
						There are {employeesQuery.data.length} employees loaded
						with React Query.
					</h2>
					<ul className="list-disc ml-5">
						{employeesQuery.data.map((employee) => {
							return (
								<li key={employee.employeeID}>
									{employee.lastName}, {employee.firstName}{" "}
								</li>
							);
						})}
					</ul>
				</>
			)}
		</>
	);
};
