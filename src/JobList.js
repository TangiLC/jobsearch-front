import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "./jobSlice";
import TalecTable from "talec-table";
import { ImEye, ImPencil, ImBin } from "react-icons/im";

const JobList = () => {
	const dispatch = useDispatch();
	const { loading, jobs, error } = useSelector((state) => state.jobs);

	useEffect(() => {
		dispatch(fetchJobs());
	}, [dispatch]);

	let answer = ["🔴", "🟡", "🟢"];
	const data = jobs.map((job) => ({
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
	const titles = {
		date: "date",
		company: "entreprise",
		poste: "intitulé",
		contract: "contrat",
		remote: "remote",
		salary: "salaire",
		adress: "adresse",
		answer: "réponse",
	};

	const deleteItem = () => {};

	const custom = {
		columns: {
			values: [
				"date",
				"company",
				"poste",
				"contract",
				"remote",
				"salary",
				"adress",
				"answer",
			],
			width: ["6%", "18%", "18%", "4%", "4%", "10%", "18%", "6%"],
		},
		actionColumn: {
			name: "Actions",
			actions: [
				{
					icon: <ImEye />,
					func: deleteItem,
					target: "company",
					label: "delete",
				},
				{
					icon: <ImPencil />,
					func: deleteItem,
					target: "company",
					label: "delete",
				},
				{
					icon: <ImBin />,
					func: deleteItem,
					target: "company",
					label: "delete",
				},
			],
		},
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<h1>Recherche d'emploi</h1>
			<div style={{width:"95%",margin:"auto",textAlign:"center"}}>
				<TalecTable lines={data} titles={titles} custom={custom}></TalecTable>
			</div>

			{/*<ul>
				{jobs.map((job) => (
					<li key={job._id}>
						<h2>{job.poste}</h2>
						<p>Company: {job.company.name}</p>
						<p>
							Location: {job.company.adress.city}, {job.company.adress.country}
						</p>
						<p>Contract: {job.contract.type}</p>
						<p>
							Salary:{" "}
							{job.salary?.value
								? `${job.salary.value} ${job.salary.currency}`
								: "N/A"}
						</p>
					</li>
				))}
			</ul>*/}
		</div>
	);
};

export default JobList;
