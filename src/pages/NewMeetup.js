import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

export default function NewMeetupsPage() {
  const history = useHistory();
  
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-e0acc-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Current-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
  }
  
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}
