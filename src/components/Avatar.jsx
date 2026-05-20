import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user} = useContext(ShmitterContext);

    return (
        <div>
            <img className={`user-avatar ${size ?? ''}`}
                 src={user.avatar}
                 alt={user.name} />
        </div>
    );
};

export default Avatar;