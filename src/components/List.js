import ListItem from "./ListItem";

function List (props) {

    return (
        <div className="my-4 mx-auto p-2 w-1/2 min-h-screen border-solid border-black bg-orange-900 ">
            <h1 className="text-center mb-2 text-orange-100">Testing List</h1>
            <div className="">
                {props.tasks.map(task => {
                    return(
                    <ListItem key={task.id} title={task.title} priority={task.priority} description={task.description} deadline={task.deadline} />
                    )
                })}
                
            </div>

        </div>
    );
}

export default List;