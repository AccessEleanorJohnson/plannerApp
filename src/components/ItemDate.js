function ItemDate (props) {
    let date;
    if (props.date instanceof Date) {
        date = `${props.date.toLocaleString('en-US', {day: '2-digit'})}/${props.date.toLocaleString('en-US', {month: '2-digit'})}/${props.date.getFullYear()}`;
    } else {
        date = props.date;
        console.log(date + " else")
    }
    return (
        <p>{date}</p>
    );
}

export default ItemDate;