import React from "react";

const formatDateToLocal = (isoDate) => {
	if (isoDate === undefined || isoDate === null) {
		isoDate = new Date();
	}
	const date = new Date(isoDate);
	const timezoneOffset = date.getTimezoneOffset() * 60000;
	const localDate = new Date(date.getTime() - timezoneOffset);
	return localDate.toISOString().substring(0, 10) || null;
};

const Apply = ({ apply, editableJob, handleInputChange }) => {
	return (
		<div>
			<div className="inputLine">
				<label>Postulé le :</label>
				<input
					type="date"
					name="apply.date"
					value={apply.date ? formatDateToLocal(apply.date) : null}
					onChange={handleInputChange}
				/>
			</div>
			<div className="flex-container">
				<div className="inputLine" style={{ width: "48%", textAlign: "center" }}>
					<select
						name="apply.answer.status"
						value={apply.answer.status}
						onChange={handleInputChange}
					>
						<option value="rejected">🔴 Réponse négative</option>
						<option value="accepted">🟢 Réponse positive</option>
						<option value="pending">🟡 Attente de réponse</option>
						<option value="deleted">⭕ Annonce supprimée</option>
					</select>
				</div>
				<div className="inputLine" style={{ width: "48%", textAlign: "center" }}>
					<input
						type="date"
						name="apply.answer.date"
						value={
							apply.answer.date ? formatDateToLocal(apply.answer.date) : ""
						}
						onChange={handleInputChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default Apply;
