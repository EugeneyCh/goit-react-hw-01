const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="96" />
      <p>{name}</p>
      <p
        style={{
          color: isOnline ? "green" : "red",
        }}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
