import Card from '../ui/Card'
import styles from './MeetupItem.module.css';

export default function MeetupItem(props) {
  return (
    <li className={styles.item}>
      <Card> 
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  )
}
