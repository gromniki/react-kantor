import { Menu } from '../Menu/Menu';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ activeId, name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <article className="restaurants__item  place">
      <h3>{name}</h3>
      {menu?.length ? <Menu title="Меню" menu={menu} /> : null}
      {reviews?.length ? <Reviews title="Отзывы" reviews={reviews} /> : null}
      <hr />
      <ReviewForm key={activeId} />
    </article>
  );
};
