import AddItemForm from "./AddItemForm";

function AddItemModel (props) {

    const finishHandler = value => {
        props.onClose(value);
    };

    const newItemHandler = value => {
        props.onTakeItem(value);
    };

    return (
        <div className="fixed z-50 bg-black/50 h-full w-full flex justify-center content-center items-center">
            <AddItemForm onFinish={finishHandler} onNewItem={newItemHandler} />
        </div>
    );
}

export default AddItemModel;