import css from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? <p className={css.green}>Online</p> : <p className={css.red}>Offline</p>}
    </div>
  );
};

export default FriendListItem;
