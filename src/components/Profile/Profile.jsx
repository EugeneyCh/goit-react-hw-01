import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={css.container}>
    <div>
      <img src={image} alt="User avatar" />
      <p className={css.userName}>{name}</p>
      <p className={css.text}>{tag}</p>
      <p className={css.text}>{location}</p>
    </div>
    <ul className={css.userList}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
