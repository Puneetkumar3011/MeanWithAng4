
var taskPriorities : Array<TaskPriorityType> = [];

export function getServiceBaseUrl(): string{
    let localUrl: string = "http://localhost:3000";
    let prodUrl: string = "https://selfmgmt.herokuapp.com/";
    return localUrl;
}


export function getTaskPriorities(){
    taskPriorities.length = 0;
    taskPriorities.push({ key: "normal", value: "Normal" });
    taskPriorities.push({ key: "high", value: "High" });
    taskPriorities.push({ key: "urgent", value: "Urgent" });
    return taskPriorities;
}

export type TaskPriorityType = {
    key: String,
    value: String
};