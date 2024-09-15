import { loadTasks, saveTasks } from "./fileOperations";
 
// Command to add a new task
const addTask = (task) => {
    const tasks = loadTasks();

    //getting last id
    if(!tasks.hasOwnProperty('uid'))
    {
        tasks.uid = 1;
    }

    const uid = tasks.uid;

    // creating empty incomplete tasks list
    if(!tasks.hasOwnProperty('incomplete'))
    {
        tasks.incomplete = [];
    }

    tasks.incomplete.push({ id: uid + 1, task });
    saveTasks(tasks);
    console.log(`Task added: ${task}`);
};

// Command to list all tasks
const listTasks = () => {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log('No tasks available.');
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.task} - ${task.completed ? 'Completed' : 'Pending'}`);
        });
    }
};

// chage status
const  progressTask = () => {
    const tasks = loadTasks();
    
    if(!tasks.hasOwnProperty('progress'))
    {
        tasks.progress = [];
    }


}

// Command to mark a task as completed
const completeTask = (id) => {
    const tasks = loadTasks();
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        saveTasks(tasks);
        console.log(`Task completed: ${task.task}`);
    } else {
        console.log('Task not found.');
    }
};

const removeTask = (id) => {
    const tasks = loadTasks();

    
}

export { addTask, listTasks, completeTask, progressTask};