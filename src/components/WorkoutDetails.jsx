import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ( { workout } ) => {

    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {

        if (!user) {
          return
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/workouts/` + workout._id, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${user.token}`
            }
        })
        const data = await response.json()

        dispatch( { type: 'DELETE_WORKOUT', payload: data } )
    }

    return (
        <div className="workout-details">
            <h4>{ workout.title }</h4>
            <p><strong>Load (kg): </strong>{ workout.load }</p>
            <p><strong>Reps: </strong>{ workout.reps }</p>
            <p>{ formatDistanceToNow( new Date(workout?.createdAt), { addSuffix: true } ) }</p>
            <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails