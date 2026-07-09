import { Counter } from '../Counter/Counter';
import { CounterUI } from '../Counter/CounterUI';
import { useForm } from './useForm';

export const ReviewForm = () => {
  const { form, setName, setText, setRating, clear } = useForm();

  const { name, text, rating } = form;

  return (
    <form className="review-form" onSubmit={(e) => e.preventDefault()}>
      <div className="review-form__field">
        <label className="review-form__label">Имя</label>
        <input
          className="review-form__input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="review-form__field">
        <label className="review-form__label">Текст</label>
        <textarea
          className="review-form__textarea"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div className="review-form__field">
        <label className="review-form__label">Рейтинг</label>
        <CounterUI
          value={rating}
          decrement={() => setRating(Math.max(rating - 1, 0))}
          increment={() => setRating(Math.min(rating + 1, 5))}
        />
      </div>

      <button type="button" className="review-form__clear" onClick={clear}>
        Очистить
      </button>
    </form>
  );
};
