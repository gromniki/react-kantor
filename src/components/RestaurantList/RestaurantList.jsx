import { restaurants } from '../../mocks/mock';
import { Restaurant } from '../Restaurant/Restaurant';

export const RestaurantList = () => {
  return (
    <ul>
      {restaurants.map(({ id, name, menu, reviews }) => (
        <Restaurant key={id} name={name} menu={menu} reviews={reviews} />
      ))}
    </ul>
  );
};
