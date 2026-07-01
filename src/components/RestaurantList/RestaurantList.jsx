import { restaurants } from '../../mocks/mock';
import { Restaurant } from '../Restaurant/Restaurant';

export const RestaurantList = () => {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
};
