import ListItem from "./ListItem";

function List (props) {

    const handler = value => {
        props.onRemoveItem(value)
    }

    return (
        <div className="my-4 mx-auto p-2 w-1/2 min-h-screen border-solid border-black bg-orange-900 ">
            <h1 className="text-center mb-2 text-orange-100">Testing List</h1>
            <ul className="">
                {props.items.map(item => {
                    return(
                    <ListItem key={item.key} item={item} onRemoveItem={handler} />
                    )
                })}
                
            </ul>

        </div>
    );
}

export default List;