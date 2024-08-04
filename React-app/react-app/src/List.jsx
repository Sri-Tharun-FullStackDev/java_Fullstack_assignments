function List()
{
    const fruits = [{name: "apple", calories: 95},
        {name: "orange", calories: 60},
        {name: "banana", calories: 50},
        {name: "coconut", calories: 43},
        {name: "pineapple", calories: 60}]
    

    const listItems = fruits.map(fruit => <li>fruit</li>)
    return(<ol>{listItems}</ol>);

}

export default List