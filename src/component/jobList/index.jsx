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
			values: customValues,
			width: customWidth,
		},
		actionColumn: {
			name: "Actions",
			actions: [
				{
					icon: <ImEye />,
					func: viewItem,
					target: "id",
					label: "View",
				},
				{
					icon: <ImPencil />,
					func: deleteItem,
					target: "id",
					label: "Edit",
				},
				{
					icon: <ImBin />,
					func: deleteItem,
					target: "id",
					label: "Delete",
				},
			],
		},
	};

	let answer = ["🔴", "🟡", "🟢","⭕"];
	const data = jobs.map((job) => ({
		id: job._id,
		date: new Date(job.apply.date).toLocaleDateString(),
		company: job.company.name,
		poste: job.contract.poste,
		contract: job.contract.type,
		remote: job.contract.remote,
		salary:
			(job.contract.salary?.[0] ? `${job.contract.salary[0]}€ - ` : "-") +
			(job.contract.salary?.[1] ? `${job.contract.salary[1]}€` : "-"),
		adress: job.company.city,
		answer: job.apply.answer?.status
			? `${job.apply.answer.date!==null?new Date(job.apply.answer.date).toLocaleDateString():""} ${
					job.apply.answer.status === "rejected" ? answer[0] : 
					job.apply.answer.status ==="deleted" ? answer[3]:
					job.apply.answer.status ==="ok" ? answer[2]:answer[1]
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
