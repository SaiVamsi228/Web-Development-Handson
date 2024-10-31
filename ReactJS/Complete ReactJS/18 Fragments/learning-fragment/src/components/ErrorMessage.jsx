import styles from "./ErrorMessage.module.css"
const ErrorMessage = ({foodItems})=>{


    return <>{ foodItems.length === 0 && <h2 className={styles.errormsg}>I am still Hungry.</h2> }    </>
};


export default ErrorMessage;