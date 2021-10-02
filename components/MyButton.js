
import styles from './Button.module.css'
function MyButton(props) {
    return (
        <div >
            <div class="flex-auto flex space-x-5" style={{ display: 'flex', flexDirection: 'row' }}>
                <button onClick={props.onClick} className={styles.error} type="submit">{props.Icon}{props.title}</button>
            </div>
        </div>
    )
}

export default MyButton

// const styles = makeStyles.create({
//     button: {
//         width: '100',
//         height: scale(56),
//         borderRadius: scale(15),
//         marginVertical: 10,
//     },
// })