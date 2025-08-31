export type Priority = 1 | 2 | 3; // 1 High, 2 Medium, 3 Low

export interface Task {
id: string;
title: string;
description?: string;
categoryId?: string;
priority: Priority;
dueDate?: string; // ISO date
completed: boolean;
createdAt: string; // ISO date
}
