import { loadTasks, saveTasks, initialzeTaskFile } from "./fileOperations.js";

// Command to add a new task
const addTask = (title) => {
  initialzeTaskFile();
  const tasks = loadTasks();

  // creating empty incomplete tasks list
  if (!tasks.hasOwnProperty("incomplete")) {
    tasks.incomplete = [];
  }
  tasks.uid += 1;
  const task = {
    id: tasks.uid,
    title: title,
  };
  tasks.incomplete.push(task);
  console.log(tasks);
  saveTasks(tasks);
  console.log(`Task added: ${task}`);
};


// Command to list all tasks
const listAllTasks = () => {
  initialzeTaskFile();
  const tasks = loadTasks();
  const allTask = tasks.incomplete.concat(tasks.progress, tasks.incomplete);
  if (allTask.length <= 0) {
    console.log("No task present");
    return;
  }
  console.log(allTask);
};

// Command to list by status
const listByStatus = (status) => {
  initialzeTaskFile();
  const tasks = loadTasks();
  if (tasks[status] === undefined || tasks[status].size <= 0) {
    console.log("No task present");
    return;
  }
  console.log(tasks[status]);
};

// change status

const progressTask = (id, status, toStatus) => {
  if (status === toStatus) {
    console.log(`Task already have ${toStatus}`);
    return;
  }
  const tasks = loadTasks();

  const curTasksByStatus = tasks[status];

  if (curTasksByStatus.length <= 0) {
    console.log("No task present");
    return;
  }

  const curTaskIndex = curTasksByStatus.findIndex(
    (task) => task.id.toString() === id
  );

  if (curTaskIndex == -1) {
    console.log("No task with given id is present.");
    return;
  }

  const curTask = curTasksByStatus[curTaskIndex];
  //update cur task status
  //remove current task from current status list. then save this list in tasks
  tasks[status].splice(curTaskIndex, 1);

  //add the element to desired task array
  if (toStatus === undefined) {
    if (status === "incomplete") toStatus = "progress";
    else if (status === "progress") toStatus = "completed";
    else {
      console.log("Already completed. Can't change the status further");
      return;
    }
  }

  tasks[toStatus].push(curTask);
  saveTasks(tasks);
  console.log(
    `Status of task "${curTask.id}" : "${curTask.title}" changed to : ${toStatus}`
  );
};

// Command to mark a task as completed
const completeTask = (id) => {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
    saveTasks(tasks);
    console.log(`Task completed: ${task.task}`);
  } else {
    console.log("Task not found.");
  }
};

const removeTask = (id, curStatus) => {
  const tasks = loadTasks();
  const curTasksByStatus = tasks[curStatus];

  if (curTasksByStatus.length <= 0) {
    console.log("No task present");
    return;
  }

  const curTaskIndex = curTasksByStatus.findIndex(
    (task) => task.id.toString() === id
  );

  if (curTaskIndex == -1) {
    console.log("No task with given id is present.");
    return;
  }

  tasks[curStatus].splice(curTaskIndex, 1);

  saveTasks(tasks);
};


export {
  addTask,
  completeTask,
  progressTask,
  listAllTasks,
  listByStatus,
  removeTask,
};
