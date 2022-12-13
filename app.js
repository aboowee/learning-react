const { useState } = React;

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const style = {
    fontWeight: isDone ? 'bold' : 'normal'
  };
  return (
    <li style={style} onClick={() => setIsDone(!isDone)}>
      {props.food}
    </li>
  );
};

const GroceryList = (props) => (
  <ul>
    {props.foods.map((food) => (
      <GroceryListItem food={food} />
    ))}
  </ul>
);

const Grocery = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList foods={['Dairy', 'Egg', 'Bread']}/>
  </div>
  );

ReactDOM.render(<Grocery />, document.getElementById('app'));



// const TodoListItem = (props) => (
//   <li>{props.todo}</li>
// )

// const TodoList = (props) => (
//   <ul>
//     {props.todos.map((todo) => (
//       <TodoListItem todo={todo} />
//     ))}
//   </ul>
// );

// const App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('app'));