export class Todo {
  id: number;
  content: string;
  isCompleted: boolean;
  created: Date;

  constructor(
    id: number,
    content: string,
    isCompleted: boolean,
    created: Date
  ) {
    this.id = id;
    this.content = content;
    this.isCompleted = isCompleted;
    this.created = created;
  }
}
