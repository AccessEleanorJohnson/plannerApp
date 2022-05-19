function AddItemForm (props) {

    const clickHandler = () => {
        props.onCancel(false);
    }

    return (
        <div className="p-4 bg-orange-100">
            <form>
                <h2 className="mb-2">Add a Task</h2>

                <label className="" htmlFor="task-title">Title</label>
                <input className="block mb-2" id="task-title" type="text" name="title" />

                <label className="" htmlFor="description">Description</label>
                <input className="block mb-2" id="description" type="text" name="description" />

                <label className="" htmlFor="priority">Priority</label>
                <input className="block mb-2" id="priority" type="text" name="priority" />

                <label className="" htmlFor="deadline">Deadline</label>
                <input className="block mb-2" id="deadline" type="text" name="deadline" />

                <button className="m-2 py-2 px-4 border border-orange-900 rounded-md" type="submit" >Submit</button>
                <button className="m-2 py-2 px-4 border border-orange-900 rounded-md" type="button" onClick={clickHandler} >Cancel</button>
            </form>
        </div>
    );
}

export default AddItemForm;