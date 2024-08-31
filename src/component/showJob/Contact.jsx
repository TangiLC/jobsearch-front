import React from "react";

// Fonction pour convertir une date en format ISO en date locale sans décalage
const formatDateToLocal = (isoDate) => {
	const date = new Date(isoDate);
	const timezoneOffset = date.getTimezoneOffset() * 60000; // Obtenir le décalage de fuseau horaire en millisecondes
	const localDate = new Date(date.getTime() - timezoneOffset); // Appliquer le décalage
	return localDate.toISOString().substring(0, 10); // Retourner en format 'YYYY-MM-DD'
};

// Fonction pour formater une date en format 'JJ/MM/AAAA'
const formatToLocalDateString = (isoDate) => {
	const date = new Date(isoDate);
	return date.toLocaleDateString("fr-FR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
};

const Contact = ({ editableJob, handleInputChange }) => {
	return (
		<div>
			<div>
				<label>Postulé le :</label>
				<input
					type="date"
					name="contractApply"
					value={formatDateToLocal(editableJob.contract.apply)}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<label>Réponse :</label>
				<select
					name="answerStatus"
					value={editableJob.answer ? editableJob.answer.status : ""}
					onChange={handleInputChange}
				>
					<option value="rejected">🔴 Réponse négative</option>
					<option value="accepted">🟢 Réponse positive</option>
					<option value="">🟡 Attente de réponse</option>
					<option value="deleted">⭕ Annonce supprimée</option>
				</select>
				{editableJob.answer && (
					<>
						<input
							type="date"
							name="answerDate"
							value={formatDateToLocal(editableJob.answer.date)}
							onChange={handleInputChange}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default Contact;
