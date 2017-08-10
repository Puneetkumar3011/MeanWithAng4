export class TaskModel{
        constructor(
            public id: string, 
            public description: string,
            public taskStatus: string,
            public createdOn?: string,
            public user?: string,
            public priority?: string){
    }
}