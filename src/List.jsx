import Card from "./card.jsx";
function List() {
  const fruits = [<Card> </Card>];
  const listItems = fruits.map((fruit) => <li>{fruit}</li>);
  return <ul>{listItems}</ul>;
}
export default List;
