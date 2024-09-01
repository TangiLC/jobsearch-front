import React from "react";

const Company = ({
	company,
	editableJob,
	handleInputChange,
}) => {
	return (
		<div>
			<div className="inputLine">
				<label>Entreprise :</label>
				<input
					type="text"
					name="company.name"
					size={30}
					value={company.name}
					onChange={(e) =>
						handleInputChange({
							target: {
								name: "company.name",
								value: e.target.value,
							},
						})
					}
				/>
			</div>
			<div className="inputLine">
				<label>Adresse :</label>
				<input
					type="text"
					name="company.address"
					size={40}
					value={company.address || ""}
					onChange={(e) =>
						handleInputChange({
							target: {
								name: "company.address",
								value: e.target.value,
							},
						})
					}
				/>
			</div>
			<div className="flex-container">
				<div
					className="inputLine"
					style={{ width: "48%", textAlign: "center" }}
				>
					<label>cp :</label>
					<input
						size={6}
						type="text"
						name="company.cp"
						value={company.cp || ""}
						onChange={(e) =>
							handleInputChange({
								target: {
									name: "company.cp",
									value: e.target.value,
								},
							})
						}
					/>
				</div>
				<div className="inputLine" style={{ width: "48%" }}>
					<label>Ville :</label>
					<input
						type="text"
						name="company.city"
						value={company.city || ""}
						onChange={(e) =>
							handleInputChange({
								target: {
									name: "company.city",
									value: e.target.value,
								},
							})
						}
					/>
				</div>
			</div>
			<div className="inputLine">
				<label>Pays :</label>
				<input
					type="text"
					name="company.country"
					value={company.country || ""}
					onChange={(e) =>
						handleInputChange({
							target: {
								name: "company.country",
								value: e.target.value,
							},
						})
					}
				/>
			</div>
			<div className="flex-container">
				<div
					className="inputLine"
					style={{ width: "48%", textAlign: "center" }}
				>
					<label>Tél :</label>
					<input
						type="tel"
						pattern="\+[0-9]{2}\.[0-9]{3}\.[0-9]{2}\.[0-9]{2}\.[0-9]{2}"
						name="company.contact.tel"
						size={15}
						value={company.contact.tel || ""}
						onChange={(e) =>
							handleInputChange({
								target: {
									name: "company.contact.tel",
									value: e.target.value,
								},
							})
						}
					/>
				</div>
				<div className="inputLine">
					<label>mail :</label>
					<input
						type="email"
						/*pattern="[a-z0-9\._%\+\-]+@[a-z0-9\.\-]+\.[a-z]{2,}$"*/
						name="company.contact.mail"
						size={21}
						value={company.contact.mail || ""}
						onChange={(e) =>
							handleInputChange({
								target: {
									name: "company.contact.mail",
									value: e.target.value,
								},
							})
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Company;
