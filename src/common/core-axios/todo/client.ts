import { cache } from "react"
import { client } from ".."


interface RootName {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

class Todo {
    getTodo = cache(async () => {
        return await client.getBody<RootName[]>('/comments');
    });


}
export const TodoClient = new Todo();