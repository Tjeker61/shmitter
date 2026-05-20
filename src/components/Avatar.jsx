const Avatar = ({size, user}) => {
    return (
        <div>
            <img className={`user-avatar ${size ?? ''}`}
                 src={user.avatar}
                 alt={user.name} />
        </div>
    );
};

export default Avatar;