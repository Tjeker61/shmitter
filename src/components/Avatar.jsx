import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, setUser} = useContext(ShmitterContext);

    const changeAvatar = () => {
        const newUrl = prompt('Enter new avatar source url:');

        setUser({...user, avatar: newUrl});
    }

    return (
        <div>
            <img onClick={changeAvatar} className={`user-avatar ${size ?? ''}`}
                 src={user.avatar}
                 alt={user.name} />
        </div>
    );
};

export default Avatar;