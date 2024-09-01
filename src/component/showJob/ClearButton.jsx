import { setJobId } from "../../redux/idSlice";
import { useSelector, useDispatch } from "react-redux";

const ClearButton=()=>{
    const dispatch = useDispatch();

    const handleClick=()=>{
        dispatch(setJobId(0));
    }

    return(
        <div className="button" onClick={handleClick}>Clear</div>
    )
}

export default ClearButton