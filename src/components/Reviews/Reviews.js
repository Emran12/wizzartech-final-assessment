import React, { useEffect, useState } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-orange-800 mt-16">
        Customer Reviews
      </h1>
      <div className="reviews">
        {reviews.map((review) => (
          <div key={review._id}>
            <div className="card w-96 h-96 bg-white shadow-xl">
              <div>
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                      <img src={review.img} alt="" />
                    </div>
                  </div>
                </figure>
                <h2 className="text-center text-xl font-bold pt-2">
                  {review.name}
                </h2>
              </div>
              <div>
                <div className="card-body items-center text-center">
                  <img src={review.ratings} alt="" />
                  <p>{review.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
