import { Counter } from '../Counter/Counter';

export const Menu = ({ title, menu }) => {
  return (
    <>
      <h4>{title}</h4>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            {dish.name}
            <Counter />
          </li>
        ))}
      </ul>
    </>
  );
};
