import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Poste from "./Poste";
import Company from "./Company";
import Contact from "./Contact";

const ShowJob = () => {
	const [selectedJob, setSelectedJob] = useState(null);
	const [editableJob, setEditableJob] = useState(null);
	const [minSalary, setMinSalary] = useState(25000);
	const [maxSalary, setMaxSalary] = useState(45000);

	const dispatch = useDispatch();
	const { loading, jobs, error } = useSelector((state) => state.jobs);
	const id = useSelector((state) => state.jobId.value);

	useEffect(() => {
		const job = jobs.find((job) => job._id === id);
		if (job) {
			setMinSalary(job.salary?.value[0] || 25000);
			setMaxSalary(job.salary?.value[1] || 45000);
			setSelectedJob(job);
			setEditableJob({
				...job,
				salary: {
					...job.salary,
					value: [job.salary?.value[0] || 25000, job.salary?.value[1] || 45000],
				},
			});
		}
	}, [id, jobs]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditableJob({
			...editableJob,
			[name]: value,
		});
	};

	const handleInputSalaryRange = (e) => {
		setMinSalary(e.minSalary);
		setMaxSalary(e.maxSalary);
		const newSalary = [...editableJob.salary.value];
		newSalary[0] = e.minSalary;
		newSalary[1] = e.maxSalary;
		setEditableJob({
			...editableJob,
			salary: { ...editableJob.salary, value: newSalary },
		});
	};

	return (
		<div>
			<h2>Détail</h2>

			{editableJob && (
				<>
					<div className="flex-container">
						<div className="card">
							<Company
								editableJob={editableJob}
								handleInputChange={handleInputChange}
							/>
							<Contact
								editableJob={editableJob}
								handleInputChange={handleInputChange}
							/>
						</div>
						<div className="card">
							<Poste
								editableJob={editableJob}
								handleInputChange={handleInputChange}
								handleInputSalaryRange={handleInputSalaryRange}
								minSalary={minSalary}
								maxSalary={maxSalary}
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ShowJob;
