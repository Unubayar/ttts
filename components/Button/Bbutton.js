import styles from './Button.module.css'
function Bbutton(props) {
    return (
        <div style={{ paddingRight: '20px' }}>
            <button onClick={props.onClick} className={styles.Signin} type="button">{props.title}</button>
        </div>
    )
}

export default Bbutton
