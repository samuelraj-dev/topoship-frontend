import { WorkoutsContext } from '../context/Workout'
import { useContext } from 'react'

export const useWorkoutsContext = () => {

    const context = useContext(WorkoutsContext)

    if(!context) {
        throw Error('useWorkoutsContext must be used inside and WorkoutContextProvider')
    }
    return context
}