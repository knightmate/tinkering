const initialData = [
  { id: '1', text: 'Complete homework', done: false },
  { id: '2', text: 'Buy groceries', done: false },
  { id: '3', text: 'Go for a run', done: false },
  { id: '4', text: 'Read a book', done: false },
  { id: '5', text: 'Write a blog post', done: false },
  { id: '6', text: 'Attend a meeting', done: false },
  { id: '7', text: 'Learn a new language', done: false },
  { id: '8', text: 'Practice coding', done: false },
  { id: '9', text: 'Cook dinner', done: false },
  { id: '10', text: 'Watch a movie', done: false },
];

class TodoListManager {
  constructor() {
    this.data = JSON.parse(JSON.stringify(initialData));
  }

  getData() {
   
    //console.log("this data",this.data);

    return this.data;
  }

  clearData() {
    this.data = [];
  }

  refreshData(){ 
    
    this.data =initialData.map((item)=>{
      return {...item,done:false}
    })
   
}
}

const  TodoManger= new TodoListManager();
export default TodoManger