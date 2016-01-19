import React from 'react';

let ListItem = (props) => (<li>
    {props.children}
</li>)

let List = (props) =>
    <ul>
        {props.items.map((it, k) => {
             let ItemComponent = props.itemComponent;
             return <ItemComponent key={k}>{it}</ItemComponent>
         })}
    </ul>;

List.defaultProps = {
    items: ['haha', 'hoho'],
    itemComponent: ListItem
}

export default List;
