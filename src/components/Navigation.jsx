import Avatar from "./Avatar.jsx";

const Navigation = ({user}) => {
    return (
        <div className={'nav'}>
            <Avatar size={'small'} user={user} />
        </div>
    );
};

export default Navigation;