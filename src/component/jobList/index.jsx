import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../../redux/jobSlice";
import { setJobId } from "../../redux/idSlice";
import TalecTable from "talec-table";

import { titles, customValues, customWidth } from "./const";
import { ImEye, ImPencil, ImBin } from "react-icons/im";

const JobList = () => {
	const dispatch = useDispatch();
	const { loading, jobs, error } = useSelector((state) => state.jobs);

	useEffect(() => {
		dispatch(fetchJobs());
	}, [dispatch]);

	const deleteItem = (id) => {};
	const viewItem = (id) => {
		dispatch(setJobId(id));
	};

	const custom = {
		columns: {
			values:  customValues ,
			width:  customWidth ,
		},
		actionColumn: {
			name: "Actions",
			actions: [
				{
					icon: <ImEye />,
					func: viewItem,
					target: "id",
					label: "delete",
				},
				{
					icon: <ImPencil />,
					func: deleteItem,
					target: "id",
					label: "delete",
				},
				{
					icon: <ImBin />,
					func: deleteItem,
					target: "id",
					label: "delete",
				},
			],
		},
	};

	let answer = ["🔴", "🟡", "🟢"];
	const data = jobs.map((job) => ({
		id: job._id,
		date: new Date(job.contract.apply).toLocaleDateString(),
		company: job.company.name,
		poste: job.poste,
		contract: job.contract.type,
		remote: job.contract.remote,
		salary:
			(job.salary?.value[0] ? `${job.salary.value[0]}€ - ` : "-") +
			(job.salary?.value[1] ? `${job.salary.value[1]}€` : "-"),
		adress: job.company.adress.city,
		answer: job.answer
			? `${new Date(job.answer.date).toLocaleDateString()} ${
					job.answer.status === "rejected" ? answer[0] : answer[2]
			  }`
			: answer[1],
	}));

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<h2>Liste</h2>

			<TalecTable
				lines={data}
				titles={titles}
				custom={custom}
				hide={["id"]}
			></TalecTable>
		</div>
	);
};

export default JobList;
