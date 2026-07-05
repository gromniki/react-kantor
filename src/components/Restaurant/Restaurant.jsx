import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <li className="restaurants__item restaurants-item">
      <h3>{name}</h3>
      {menu?.length ? <Menu title="Меню" menu={menu} /> : null}
      {reviews?.length ? <Reviews title="Отзывы" reviews={reviews} /> : null}
    </li>
  );
};
