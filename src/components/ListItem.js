function ListItem (props) {
    const item = props.item;
    const clickHandler = () => {
        props.onRemoveItem(item.key);
    };

    return (
        <li className="mb-4 py-2 px-4 bg-orange-100 rounded-md text-orange-900">
            <div className="flex justify-between pb-2">
                <h2 className="font-bold">{item.title}</h2>
                <p className="">{item.deadline}</p>
                <p>{item.priority}</p>    
            </div>
            
            <p className="pb-2">{item.description}</p>

            <div className="flex justify-between">
                <button className="py-2 px-4 border border-orange-900 rounded-md">Edit</button>
                <button className="py-2 px-4 border border-orange-900 rounded-md" onClick={clickHandler}>Remove</button>
            </div>
            
        </li>
    );
}

export default ListItem;