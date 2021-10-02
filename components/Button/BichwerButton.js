import styles from './Button.module.css';
function BichwerButton(props) {
    return (
        <div style={{ paddingRight: '20px' }}>
            <button onClick={props.onClick} className={styles.Bichwer} type="button">{props.title}</button>
        </div>
    )
}

export default BichwerButton
