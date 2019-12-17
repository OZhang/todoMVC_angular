import * as uuid from 'uuid';

export class Todo {
    id: string;
    title: string;
    isCompleted: boolean;

    constructor(title: string){
        this.id = uuid.v4();
        this.title = title;
        this.isCompleted = false;
    }

    changeStatus(isCompleted: boolean){
        this.isCompleted = isCompleted;
    }
}