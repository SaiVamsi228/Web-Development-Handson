import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ todoItems }) => {
  return (
    <>
      {todoItems.length === 0 && (
        <div className={styles.WMcontainer}>
          <h1>
            Enjoy Your Day!
          </h1>
        </div>
      )}
    </>
  );
};

export default WelcomeMessage;
