import { restaurants } from '../../mocks/mock';
import { Restaurant } from '../Restaurant/Restaurant';
import { Tabs } from '../Tabs/Tabs';
import { useState } from 'react';

export const RestaurantList = () => {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeId,
  );

  return (
    <section className="restaurants">
      <h2 className="restaurants__title">Рестораны</h2>

      <div className="restaurants__tabs  tabs">
        {restaurants.map(({ id, name }) => (
          <Tabs
            key={id}
            name={name}
            isActive={id === activeId}
            onClick={() => setActiveId(id)}
          />
        ))}
      </div>

      {activeRestaurant && (
        <Restaurant
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      )}
    </section>
  );
};
