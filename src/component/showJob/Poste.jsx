import React from "react";
import MultiRangeSlider from "multi-range-slider-react";

const Poste = ({
	contract,
	editableJob,
	handleInputChange,
	handleInputSalaryRange,
}) => {
	return (
		<div>
			<div className="inputLine">
				<label>Poste :</label>
				<input
					type="text"
					name="poste"
					size={40}
					value={contract.poste}
					onChange={(e) =>
						handleInputChange({
							target: {
								name: "contract.poste",
								value: e.target.value,
							},
						})
					}
				/>
			</div>
			<div className="row inputLine">
				<div className="col">
					<label>Type de contrat :</label>
					<div>
						<label>
							<input
								type="radio"
								name="contractType"
								value="CDD"
								checked={contract.type === "CDD"}
								onChange={(e) =>
									handleInputChange({
										target: {
											name: "contract.type",
											value: e.target.value,
										},
									})
								}
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
								checked={contract.type === "CDI"}
								onChange={(e) =>
									handleInputChange({
										target: {
											name: "contract.type",
											value: e.target.value,
										},
									})
								}
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
								checked={contract.type === "Alternance"}
								onChange={(e) =>
									handleInputChange({
										target: {
											name: "contract.type",
											value: e.target.value,
										},
									})
								}
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
								name="contract.remote"
								value="full"
								checked={contract.remote === "full"}
								onChange={(e) =>
									handleInputChange({
										target: {
											name: "contract.remote",
											value: e.target.value,
										},
									})
								}
							/>
							Full
						</label>
					</div>
					<div>
						<label>
							<input
								type="radio"
								name="contract.remote"
								value="partial"
								checked={contract.remote === "partial"}
								onChange={(e) =>
									handleInputChange({
										target: {
											name: "contract.remote",
											value: e.target.value,
										},
									})
								}
							/>
							Partial
						</label>
					</div>
					<div>
						<label>
							<input
								type="radio"
								name="contract.remote"
								value="no"
								checked={contract.remote === "no"}
								onChange={(e) =>
									handleInputChange({
										target: {
											name: "contract.remote",
											value: e.target.value,
										},
									})
								}
							/>
							No
						</label>
					</div>
				</div>
			</div>
			<div className="inputLine">
				<label>Salaire :</label>
				<MultiRangeSlider
					id={"salaryRange"}
					min={25000}
					max={50000}
					step={500}
					stepOnly={true}
					minValue={contract.salary[0]}
					maxValue={contract.salary[1]}
					canMinMaxValueSame={true}
					labels={["25k", "30k", "35k", "40k", "45k", "50k"]}
					style={{ border: "none", boxShadow: "none" }}
					barInnerColor="lightGrey"
					onInput={(e) => handleInputSalaryRange(e)}
				/>
			</div>
		</div>
	);
};

export default Poste;
