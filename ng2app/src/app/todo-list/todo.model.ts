export class Todo {
  id: number = 0;
  title: string = '';
  priority: number = 1;
  deadline: string = ''; // 日付は文字列として扱うのが一般的です
  completed: boolean = false;
  is_favorite: boolean = false;
  isEdit: boolean = false; // 追加済み
}
