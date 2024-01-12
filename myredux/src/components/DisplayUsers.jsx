import {useDispatch, useSelector} from "react-redux";
import {MdDeleteForever} from "react-icons/md";
import {removeUser} from "../store/slices/UserSlice";

const DisplayUsers = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  })


  const deleteUser= (id) => {
    dispatch(removeUser(id))
  }

  return <div>
    {
      data.map((user, id) => {
        return <li key={id}>
          {user}
          <button  onClick={() => deleteUser(id)}>
          <MdDeleteForever className="delete-icon"/>
          </button>
        </li>
      })
    }
  </div>
}




export default DisplayUsers;