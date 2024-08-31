import React from "react";

const Company = ({ editableJob, handleInputChange }) => {
  return (
    <div>
      <div>
        <label>Entreprise :</label>
        <input
          type="text"
          name="companyName"
          value={editableJob.company.name}
          onChange={(e) =>
            handleInputChange({
              target: {
                name: "companyName",
                value: e.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <label>Adresse :</label>
        <input
          type="text"
          name="street"
          value={editableJob.company.adress.street || ""}
          onChange={(e) =>
            handleInputChange({
              target: {
                name: "street",
                value: e.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <label>Code postal :</label>
        <input
          type="text"
          name="cp"
          value={editableJob.company.adress.cp || ""}
          onChange={(e) =>
            handleInputChange({
              target: {
                name: "cp",
                value: e.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <label>Ville :</label>
        <input
          type="text"
          name="city"
          value={editableJob.company.adress.city || ""}
          onChange={(e) =>
            handleInputChange({
              target: {
                name: "city",
                value: e.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <label>Pays :</label>
        <input
          type="text"
          name="country"
          value={editableJob.company.adress.country || ""}
          onChange={(e) =>
            handleInputChange({
              target: {
                name: "country",
                value: e.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <label>Tél :</label>
        <input
          type="tel"
          pattern="\+[0-9]{2}\.[0-9]{3}\.[0-9]{2}\.[0-9]{2}\.[0-9]{2}"
          name="tel"
          value={editableJob.company.contact.tel || ""}
          onChange={(e) =>
            handleInputChange({
              target: {
                name: "tel",
                value: e.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <label>mail :</label>
        <input
          type="text"
          name="mail"
          value={editableJob.company.contact.mail || ""}
          onChange={(e) =>
            handleInputChange({
              target: {
                name: "mail",
                value: e.target.value,
              },
            })
          }
        />
      </div>
    </div>
  );
};

export default Company;
