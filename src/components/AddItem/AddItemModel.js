import AddItemForm from "./AddItemForm";

function AddItemModel (props) {

    const cancelHandler = value => {
        props.onClose(value);
    };

    return (
        <div className="fixed z-50 bg-black/50 h-full w-full flex justify-center content-center items-center">
            <AddItemForm onCancel={cancelHandler} />
        </div>
    );
}

export default AddItemModel;