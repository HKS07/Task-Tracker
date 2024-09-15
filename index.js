#!/usr/bin/env node

import { addTask, progressTask, listAllTasks, listByStatus, removeTask } from "./commands.js";

// Basic command line interface
const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];
const arg3 = process.argv[5];

switch (command) {
    case 'list-all':
        listAllTasks();
        break;
    case 'list-by-status':
        listByStatus(arg1 );
        break;
    case 'add': 
        addTask(arg1);
        break;
    case 'move':
        progressTask(arg1,arg2,arg3);
        break;
    case 'remove':
        removeTask(arg1, arg2);
        break;
    default:
        console.log('Add Task: task-cli add title');
        console.log('Show all tasks: task-cli list-all');
        console.log('Show by status: task-cli list-by-status status');
        console.log('Change status: task-cli move id current-status next-status(optional)');
        console.log('Remove task: task-cli remove id current-status');
        break;
}
