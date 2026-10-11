import SectionHeading from "./SectionHeading.jsx";

const reviews = [
  {
    name: "Sara Lopez",
    handle: "A regular since 2021",
    image: "/testimonial-1.png",
    quote:
      "The kind of place where the food is wonderful and you somehow end up staying for another hour.",
    rating: "5.0",
  },
  {
    name: "John Doucette",
    handle: "Weekend visitor",
    image: "/testimonial-2.png",
    quote:
      "Warm people, beautiful flavours, and the Greek salad is genuinely something special.",
    rating: "5.0",
  },
  {
    name: "Mia Maria",
    handle: "Neighbourhood favourite",
    image: "/testimonial-4.png",
    quote:
      "A little corner of the Mediterranean in Chicago. Every visit feels like coming home.",
    rating: "4.9",
  },
];

export default function Testimonials() {
  return (
    <section className="reviews-section section-pad" id="reviews">
      <div className="container">
        <SectionHeading
          eyebrow="KIND WORDS, FULL HEARTS"
          title={
            <>
              Don’t just take <em>our word.</em>
            </>
          }
          description="A few notes from the people who make our table feel full."
        />
        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-top">
                <span className="stars">★★★★★</span>
                <span className="review-score">{review.rating}</span>
              </div>
              <p className="review-quote">“{review.quote}”</p>
              <div className="review-person">
                <img src={review.image} alt="" />
                <div>
                  <h3>{review.name}</h3>
                  <span>{review.handle}</span>
                </div>
                <span className="review-mark">“</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
