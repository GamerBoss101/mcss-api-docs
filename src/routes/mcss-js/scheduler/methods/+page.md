---
title: Scheduler
---
The scheduler class is used to get information about the scheduler of a server. It is a sub class of the server class.

## Methods
- `server.scheduler.get(): Promise<AppResponse>` 
  - Used to get the scheduler of the server
- `server.scheduler.getTasks(): Promise<AppResponse>` 
  - Used to get the tasks of the scheduler
- `server.scheduler.getTask(taskId: string): Promise<AppResponse>` 
  - Used to get a task of the scheduler
- `server.scheduler.create(task: Task): Promise<AppResponse>` 
  - Used to create a task for the scheduler
- `server.scheduler.delete(taskId: string): Promise<AppResponse>` 
  - Used to delete a task of the scheduler
- `server.scheduler.update(taskId: string, task: Task): Promise<AppResponse>` 
  - Used to update a task of the scheduler
- `server.scheduler.run(taskId: string): Promise<AppResponse>` 
  - Used to run a task of the scheduler

## Task Builder
You can also use a Task Builder to create a task. The Task Builder has the following methods:

### Constructor
- `name: string` - The name of the task
- `enabled: boolean` - Whether the task is enabled
- `playerRequirement: number` - The player requirement of the task

### Methods
- `task.setName(name: string): Task` 
- - Sets the name of the task
- `task.setEnabled(enabled: boolean): Task` 
- - Sets whether the task is enabled
- `task.setPlayerRequirement(playerRequirement: object): Task` 
- - Sets the player requirement of the task
- `task.setTiming(timing: object): Task` 
- - Sets the timing of the task
- `task.addJob(action: object | ServerAction | string[]): Task` 
- - Sets the job of the task