import ReactDOM from 'react-dom';
import { useState } from 'react';
import AddItemModel from './AddItemModal';
import PreviousMap from 'postcss/lib/previous-map';

function AddItemButton (props) {
    const [addButtonClicked, setAddButtonClicked] = useState(false);

    const clickHandler = () => {
        setAddButtonClicked(true);
    };

    const closeHandler = (value) => {
        setAddButtonClicked(value);
    };

    const takeItemHandler = (value) => {
        props.onAddItem(value);
    }
    return (
        <>
            <button className="py-2 px-4 border border-orange-900 rounded-md" onClick={clickHandler}>Add</button>
            {addButtonClicked && ReactDOM.createPortal(<AddItemModel onClose={closeHandler} onTakeItem={takeItemHandler}/>, document.getElementById('modal'))}
        </>
        
    );
}

export default AddItemButton;