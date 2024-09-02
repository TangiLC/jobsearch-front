import axios from "axios";
import { useDispatch } from "react-redux";
import { setJobId } from "../../redux/idSlice";
import { fetchJobs } from "../../redux/jobSlice";

const SaveButton = ({ data, id, allRequiredFields }) => {
	const dispatch = useDispatch();

	const handleClick = async () => {
        console.log("data",data)
		if (!allRequiredFields) {
			return;
		}

		try {
			if (id === 0) {
				const response = await axios.post(
					"http://localhost:3003/api/post_job",
					data
				);
				dispatch(setJobId(response.data._id));
			} else {
				await axios.patch(`http://localhost:3003/api/patch_job/${id}`, data);
			}
			dispatch(fetchJobs());
			console.log("Job saved successfully");
		} catch (error) {
			console.error("Error saving job:", error);
		}
	};

	return (
		<div
			className={`button save_button ${!allRequiredFields ? "inactive" : ""}`}
			onClick={handleClick}
		>
			Save
		</div>
	);
};

export default SaveButton;
