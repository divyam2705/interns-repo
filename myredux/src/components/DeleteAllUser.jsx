
import { clearAllUsers } from "../store/slices/UserSlice";
import {useDispatch} from "react-redux"

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearAllUsers())
  }

  return  <div>
  <button className="btn clear-btn" onClick={deleteUsers}>clear users</button>
  </div>
}




export default DeleteAllUser;