import React from 'react'

import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

    const defaultTask = new Task('example', 'default descriptcion',
    false, LEVELS.NORMAL);

    const changeState = (id) =>{
        console.log('todo: cambiar estado de una tarea')
    }


    return (
        <div>

            <div>
                your Tasks: 
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
            
        </div>
    )
}



export default TaskListComponent;
