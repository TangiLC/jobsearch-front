import React from "react";
import MultiRangeSlider from "multi-range-slider-react";

const Poste = ({
	editableJob,
	handleInputChange,
	handleInputSalaryRange,
	minSalary,
	maxSalary,
}) => {
	return (
		<div>
			<div>
				<label>Poste :</label>
				<input
					type="text"
					name="poste"
					value={editableJob.poste}
					onChange={handleInputChange}
				/>
			</div>
			<div className="row">
				<div className="col">
					<label>Type de contrat :</label>
					<div>
						<label>
							<input
								type="radio"
								name="contractType"
								value="CDD"
								checked={editableJob.contract.type === "CDD"}
								onChange={handleInputChange}
							/>
							CDD
						</label>
					</div>
					<div>
						<label>
							<input
								type="radio"
								name="contractType"
								value="CDI"
								checked={editableJob.contract.type === "CDI"}
								onChange={handleInputChange}
							/>
							CDI
						</label>
					</div>
					<div>
						<label>
							<input
								type="radio"
								name="contractType"
								value="Alternance"
								checked={editableJob.contract.type === "Alternance"}
								onChange={handleInputChange}
							/>
							Alternance
						</label>
					</div>
				</div>
				<div className="col">
					<label>Remote :</label>
					<div>
						<label>
							<input
								type="radio"
								name="remote"
								value="full"
								checked={editableJob.contract.remote === "full"}
								onChange={handleInputChange}
							/>
							Full
						</label>
					</div>
					<div>
						<label>
							<input
								type="radio"
								name="remote"
								value="partial"
								checked={editableJob.contract.remote === "partial"}
								onChange={handleInputChange}
							/>
							Partial
						</label>
					</div>
					<div>
						<label>
							<input
								type="radio"
								name="remote"
								value="no"
								checked={editableJob.contract.remote === "no"}
								onChange={handleInputChange}
							/>
							No
						</label>
					</div>
				</div>
			</div>
			<div>
				<label>Salaire :</label>
				<MultiRangeSlider
					id={"salaryRange"}
					min={15000}
					max={50000}
					step={500}
					stepOnly={true}
					minValue={minSalary || 15000}
					maxValue={maxSalary || 50000}
					canMinMaxValueSame={true}
					labels={["15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k"]}
                    style={{"border":"none","boxShadow":"none"}}
                    barInnerColor="lightGrey"
					onInput={(e) => handleInputSalaryRange(e)}
				/>
			</div>
		</div>
	);
};

export default Poste;
