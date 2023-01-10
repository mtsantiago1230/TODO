import './TodoList.css'

function TodoList(props)
{
  return (
    <section>
      <ul>
        {/* children viene siendo los li que estan en <TodoItem/> */}
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };