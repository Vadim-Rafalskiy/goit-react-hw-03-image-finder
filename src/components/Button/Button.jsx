import styles from './Button.module.scss';

const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={styles.button}>
      Load more
    </button>
  );
};

export default Button;
