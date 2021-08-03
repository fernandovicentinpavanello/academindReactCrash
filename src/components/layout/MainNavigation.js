import { Link } from 'react-router-dom'
import styleClasses from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={styleClasses.header}>
      <div>
        React Meetups
      </div>
      <nav>
        <ul>
          <li><Link to='/'>All Meetups</Link></li>
          <li><Link to='/new-meetups'>Add New Meetup</Link></li>
          <li><Link to='/favorites'>My Favorites</Link></li>
        </ul>
      </nav>
    </header>
  )
}
