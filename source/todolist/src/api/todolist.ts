import { Guid } from "guid-typescript"

export class Todo{
    constructor(
        public id: Guid,
        public name: string,
        public completed: boolean
    ){}
}