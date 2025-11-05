import React from "react";

const ProductReviews = ({ product }) => {
  return (
    <section aria-labelledby="reviews-heading" className="mt-10">
      <h3 id="reviews-heading" className="text-2xl font-semibold mt-10 mb-4">
        Reviews
      </h3>

      <aside
        className="flex items-center gap-4 mb-6 bg-accent p-4 rounded-lg"
        aria-hidden
      >
        <div>
          <p className="text-yellow-500 text-2xl">
            {"★".repeat(
              product.reviews && product.reviews.length > 0
                ? Math.round(
                    product.reviews.reduce(
                      (acc, review) => acc + review.rating,
                      0
                    ) / product.reviews.length
                  )
                : 0
            )}
            {"☆".repeat(
              5 -
                (product.reviews && product.reviews.length > 0
                  ? Math.round(
                      product.reviews.reduce(
                        (acc, review) => acc + review.rating,
                        0
                      ) / product.reviews.length
                    )
                  : 0)
            )}
            {product.rating ? ` (${product.rating.toFixed(1)})` : ""}
          </p>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          {product.reviews ? product.reviews.length : 0} reviews
        </p>
      </aside>

      {product.reviews && product.reviews.length > 0 ? (
        <ul className="space-y-4">
          {product.reviews.map((review) => (
            <li key={review.id} className="border-b pb-4 dark:border-gray-600">
              <p className="font-medium">{review.reviewerName}</p>
              <p className="text-yellow-500">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {review.comment}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </section>
  );
};

export default ProductReviews;
