# TaskTracker CLI

## Description

TaskTracker is a command-line interface (CLI) tool used to track tasks and perform CRUD operations on them. It provides a straightforward way to manage tasks directly from the terminal.

## Installation

To set up the project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/tasktracker.git
   cd tasktracker
   ```

2. **Install Dependencies**

   Ensure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

## Setup

To use the CLI globally, you can link it:

```bash
npm link
```

This allows you to run `task-cli` from anywhere in your terminal.

## Usage

After setting up, you can use the CLI with the following commands:

- **Add Task**

  ```bash
  task-cli add "Task Title"
  ```

- **Show All Tasks**

  ```bash
  task-cli list-all
  ```

- **Show Tasks by Status**

  ```bash
  task-cli list-by-status "status"
  ```

- **Change Task Status**

  ```bash
  task-cli move "task-id" "current-status" ["next-status"]
  ```

- **Remove Task**

  ```bash
  task-cli remove "task-id" "current-status"
  ```

## Statuses

Tasks can have one of the following statuses:

- **Incomplete**: The task has not yet been started or completed.
- **Progress**: The task is currently being worked on.
- **Completed**: The task has been finished.

## Command Details

- `task-cli add "title"`: Adds a new task with the given title.
- `task-cli list-all`: Lists all tasks.
- `task-cli list-by-status status`: Lists tasks filtered by status.
- `task-cli move id current-status [next-status]`: Changes the status of a task identified by id. If next-status is not provided, the status will be updated to next status.
- `task-cli remove id current-status`: Removes a task identified by id and current-status.



## Author

Himanshu Kumar Singh

---

## Project URL

For more details, visit the [TaskTracker GitHub repository](https://github.com/HKS07/Task-Tracker).

https://roadmap.sh/projects/task-tracker

