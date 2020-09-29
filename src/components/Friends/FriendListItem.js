import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const activeClass = isOnline ? styles.present : styles.absent;

  return (
    <li className={styles.item}>
      <span className={activeClass}>{isOnline}</span>
      <img
        src={avatar}
        alt="user avatar"
        width="48"
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
