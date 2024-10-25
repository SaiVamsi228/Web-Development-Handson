import styles from "./Display.module.css"
const Display = ({displayItems})=>{

    return <>

    <input id={styles.display} type="text" value={displayItems}/>
    
    </>
}

export default Display