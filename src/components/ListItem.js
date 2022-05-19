function ListItem (props) {

    return (
        <div className="mb-4 py-2 px-4 bg-orange-100 rounded-md text-orange-900">
            <div className="flex justify-between pb-2">
                <h2 className="font-bold">{props.title}</h2>
                <p className="">{props.deadline}</p>
                <p>{props.priority}</p>    
            </div>
            
            <p className="pb-2">{props.description}</p>

            <div className="flex justify-between">
                <button className="py-2 px-4 border border-orange-900 rounded-md">Edit</button>
            </div>
            
        </div>
    );
}

export default ListItem;