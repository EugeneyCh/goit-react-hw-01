import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="96" />
      <p className={css.name}>{name}</p>
      <p
        style={{
          color: isOnline ? "green" : "red",
          fontWeight: 600,
        }}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
