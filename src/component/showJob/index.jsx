import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Poste from "./Poste";
import Company from "./Company";
import Apply from "./Apply";
import ClearButton from "./ClearButton";
import IframeProxy from "../IframeProxy";

const ShowJob = () => {
	const [editableJob, setEditableJob] = useState(null);

	const [company, setCompany] = useState({
		name: "",
		address: "",
		cp: null,
		city: "",
		country: "",
		contact: {
			tel: "",
			mail: "",
		},
	});

	const [apply, setApply] = useState({
		date: new Date(),
		answer: {
			status: "pending",
			date: null,
		},
	});

	const [contract, setContract] = useState({
		poste: "",
		type: null,
		remote: "no",
		salary: [25000, 45000],
		url: "",
	});

	const dispatch = useDispatch();
	const { loading, jobs, error } = useSelector((state) => state.jobs);
	const id = useSelector((state) => state.jobId.value);

	useEffect(() => {
		const job = jobs.find((job) => job._id === id) || {};
		if (job) {
			setCompany({
				name: job.company?.name || "",
				address: job.company?.address || "",
				cp: job.company?.cp || "",
				city: job.company?.city || "",
				country: job.company?.country || "",
				contact: {
					tel: job.company?.contact?.tel || "",
					mail: job.company?.contact?.mail || "",
				},
			});
			setApply({
				date: job.apply?.date || new Date(),
				answer: {
					status: job.apply?.answer?.status || "pending",
					date: job.apply?.answer?.date || "",
				},
			});
			setContract({
				poste: job.contract?.poste || "",
				type: job.contract?.type || "",
				remote: job.contract?.remote || "",
				salary: [
					job.contract?.salary ? job.contract.salary[0] : 30000,
					job.contract?.salary ? job.contract.salary[1] : 45000,
				],
				url: job.contract?.url || "",
			});
		}
	}, [id, jobs]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const [group, key, subkey] = name.split(".");

		if (group === "company") {
			setCompany((prevState) => ({
				...prevState,
				[key]: subkey ? { ...prevState[key], [subkey]: value } : value,
			}));
		} else if (group === "apply") {
			setApply((prevState) => ({
				...prevState,
				[key]: subkey ? { ...prevState[key], [subkey]: value } : value,
			}));
		} else if (group === "contract") {
			setContract((prevState) => ({
				...prevState,
				[key]: subkey ? { ...prevState[key], [subkey]: value } : value,
			}));
		}
	};

	useEffect(() => {
		setEditableJob({
			contract: {
				poste: contract.jobName,
				type: contract.type,
				remote: contract.remote,
				salary: [contract.salary.min, contract.salary.max],
				url: contract.url,
			},
			company: {
				name: company.name,
				address: company.address,
				cp: company.cp,
				city: company.city,
				country: company.country,
				contact: { tel: company.contact.tel, mail: company.contact.mail },
			},
			apply: {
				date: apply.date,
				answer: { date: apply.answer.date, status: apply.answer.status },
			},
		});
	}, [company, apply, contract]);

	const handleInputSalaryRange = (e) => {
		setContract((prevState) => ({
			...prevState,
			salary: [e.minValue, e.maxValue],
		}));
	};

	return (
		<div>
			<h2>Détail</h2>

			{editableJob && (
				<>
					<div className="flex-container">
						<div className="card">
							<Company
								company={company}
								editableJob={editableJob}
								handleInputChange={handleInputChange}
							/>
							<Apply
								apply={apply}
								editableJob={editableJob}
								handleInputChange={handleInputChange}
							/>
						</div>
						<div className="card">
							<Poste
								contract={contract}
								editableJob={editableJob}
								handleInputChange={handleInputChange}
								handleInputSalaryRange={handleInputSalaryRange}
							/>
							<ClearButton />
						</div>
						<div className="card">
							<div className="inputLine">
								<label>url :</label>
								<input
									type="text"
									name="contract.address"
									size={50}
									value={contract.url || ""}
									onChange={(e) =>
										handleInputChange({
											target: {
												name: "contract.url",
												value: e.target.value,
											},
										})
									}
								/>
							</div>
							<div className="inputLine" style={{minHeight:"15rem"}}>
								<IframeProxy url={contract.url || ""} scale={0.75} />
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ShowJob;
