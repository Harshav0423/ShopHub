import styles from './input.module.css'
function Input(props) {
    
    return <>
        <label className={styles.labellogin} htmlFor={props.name}>{props.content}</label>
        <input placeholder={props.placeholder} className={styles.uinput} type={props.type} name={props.name} value={props.value} ref={props.refname} onChange={e => props.onChange(e.target.value)}/>
    </>
}

export default Input;