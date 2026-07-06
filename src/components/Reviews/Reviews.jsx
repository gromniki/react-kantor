export const Reviews = ({ title, reviews }) => {
  return (
    <>
      <h4>{title}</h4>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </>
  );
};
