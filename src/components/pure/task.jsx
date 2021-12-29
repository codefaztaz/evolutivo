import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
const TaskComponent = ({ task }) => {
    return ( 
        <div>

        <h2>
        nombre: { task.name } 
        </h2>

        <h3>
        descripción: { task.description } </h3>

        <h4>
        level: { task.level } 
        </h4>

        <h5>
        this task is: {} </h5>

        </div>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)

}

export default TaskComponent;