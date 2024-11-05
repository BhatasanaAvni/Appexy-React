import React from 'react';
import TasksList from './TasksList';
 const tasksData = [
  {
    id: 'task1',
    title: 'Draft the new contract document for sales team',
    deadline: 'Today 10pm',
    subtasksCompleted: 3,
    totalSubtasks: 7,
    commentsCount: 21,
    priority: { label: 'High', bg: 'danger', text: 'danger' },
  },
  {
    id: 'task2',
    title: 'iOS App home page design',
    deadline: 'Today 5pm',
    subtasksCompleted: 10,
    totalSubtasks: 11,
    commentsCount: 5,
    priority: { label: 'Medium', bg: 'warning', text: 'warning' },
  },
  {
    id: 'task3',
    title: 'Enable analytics tracking',
    deadline: 'Tomorrow 5pm',
    subtasksCompleted: 5,
    totalSubtasks: 11,
    commentsCount: 7,
    priority: { label: 'Medium', bg: 'warning', text: 'warning' },
  },
  {
    id: 'task4',
    title: 'Kanban board design',
    deadline: 'Sep 11, 3pm',
    subtasksCompleted: 0,
    totalSubtasks: 5,
    commentsCount: 3,
    priority: { label: 'Low', bg: 'success', text: 'success' },
  },
];

export default tasksData;

