import styles from'./cardDays.module.css'

export default function CardDay(props){
    return (
        <div className={styles.day_container}>
            <div className={styles.day_info}>
                <p>{ props.day.dayWord }</p>
                <p>{ props.day.date }</p>
            </div>
        </div>
    );
}