import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../actions/userAction.js";

const Avatar = ({size}) => {
    const {avatar, name} = useSelector(state => state.user);
    const dispatch = useDispatch();


    return (
        <div>
            <img onClick={() => {
                const newUrl = prompt('Enter new avatar source url:');
                dispatch(changeAvatar(newUrl))
            }}
                 onContextMenu={(e) => {
                     e.preventDefault()
                     const newName = prompt('Enter new name:');
                     dispatch(changeName(newName))
                 }}
                 className={`user-avatar ${size ?? ''}`}
                 src={avatar}
                 alt={name} />
        </div>
    );
};

export default Avatar;