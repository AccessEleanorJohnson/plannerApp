import { useState } from 'react';

function AddItemForm (props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredPriority, setEnteredPriority] = useState('');
    const [enteredDeadline, setEnteredDeadline] = useState('');

    const clickHandler = () => {
        props.onFinish(false);
    }

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const descriptionChangeHandler = (e) => {
        setEnteredDescription(e.target.value);
    }

    const priorityChangeHandler = (e) => {
        setEnteredPriority(e.target.value);
    }

    const deadlineChangeHandler = (e) => {
        setEnteredDeadline(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onFinish(false);

        let deadlineDate
        const dateRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
        if(enteredDeadline.match(dateRegex)){
            deadlineDate = new Date(enteredDeadline);
        } else {
            deadlineDate = '';
        }
        

        const newItem = {
            title: enteredTitle,
            priority: enteredPriority,
            description: enteredDescription,
            deadline: deadlineDate
        }
        console.log(newItem);

        props.onNewItem(newItem);
    }

    return (
        <div className="p-4 bg-orange-100">
            <form onSubmit={submitHandler}>
                <h2 className="mb-2">Add a Task</h2>

                <label className="" htmlFor="task-title">Title</label>
                <input className="block mb-2 p-1" id="task-title" type="text" name="title" onChange={titleChangeHandler} />

                <label className="" htmlFor="description">Description</label>
                <input className="block mb-2 p-1" id="description" type="text" name="description" onChange={descriptionChangeHandler} />

                <label className="" htmlFor="priority">Priority</label>
                <input className="block mb-2 p-1" id="priority" type="text" name="priority" onChange={priorityChangeHandler} />

                <label className="" htmlFor="deadline">Deadline</label>
                <input className="block mb-2 p-1" id="deadline" type="date" name="deadline" onChange={deadlineChangeHandler} />

                <button className="m-2 py-2 px-4 border border-orange-900 rounded-md" type="submit" >Submit</button>
                <button className="m-2 py-2 px-4 border border-orange-900 rounded-md" type="button" onClick={clickHandler} >Cancel</button>
            </form>
        </div>
    );
}

export default AddItemForm;