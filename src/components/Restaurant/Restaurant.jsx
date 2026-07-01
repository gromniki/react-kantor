export const Restaurant = ({ restaurant }) => {
  return (
    <li>
      <h2>{restaurant.name}</h2>

      <h3>Меню</h3>
      <ul>
        {restaurant.menu.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>

      <h3>Отзывы</h3>
      <ul>
        {restaurant.reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </li>
  );
};
