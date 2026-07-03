export const Reviews = ({ title, reviews }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </>
  );
};
