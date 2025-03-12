
import { addUser, logWorkout, getAllWorkoutsOf, getAllWorkoutsByType, getUsers, getUser, updateUser} from './fitness';

addUser('1', 'Alice', 30, 60, 160);
addUser('2', 'Bob', 25, 70, 170);

logWorkout('1', { type: 'Running',  duration: 30 , caloriesBurned: 300, date: '2021-01-01' });
logWorkout('1', { type: 'Cycling',  duration: 60 , caloriesBurned: 600, date: '2021-01-02' });

logWorkout('2', { type: 'Running',  duration: 45 , caloriesBurned: 450, date: '2021-01-01' });
logWorkout('2', { type: 'Cycling',  duration: 90 , caloriesBurned: 900, date: '2021-01-02' });

console.log(getAllWorkoutsOf('1'));
console.log(getAllWorkoutsByType('1', 'Running'));
console.log(getUsers());
console.log(getUser('1'));

updateUser('1', { name: 'Alice', age: 30, weight: 60, height: 160 });
console.log(getUser('1'));  