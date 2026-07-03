export const Menu = ({ title, menu }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>
    </>
  );
};
