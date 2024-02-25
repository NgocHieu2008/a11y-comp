import React from "react";
import { StyledProductCard } from "./ProductCardStyled.style";

export interface ProductCardProps {
  /**
   * Product image URL.
   */
  imageUrl: string;

  /**
   * Product name.
   */
  name: string;

  /**
   * Product price.
   */
  price: number;

  /**
   * Product description.
   */
  description: string;

  /**
   * Link to the product page.
   */
  href: string;

  /**
   * Percentage discount (optional).
   */
  discountPercentage?: number;

  /**
   * Discount label (optional).
   */
  discountLabel?: string;

  /**
   * Average rating value (optional).
   */
  ratingValue?: number;

  /**
   * Number of reviews (optional).
   */
  numberOfReviews?: number;

  /**
   * Aria label for the product card.
   */
  ariaLabel?: string;

  /**
   * Custom CSS class names for styling.
   */
  className?: string;
}

export const ProductCard = React.forwardRef<HTMLElement, ProductCardProps>(
  ({
    imageUrl,
    name,
    price,
    description,
    href,
    discountPercentage,
    discountLabel,
    ratingValue,
    numberOfReviews,
    ariaLabel,
    className = "",
  }) => {
    const formattedPrice = price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return (
      <StyledProductCard className={className}>
        <a href={href} aria-label={ariaLabel}>
          <img src={imageUrl} alt={name} />
          <h3>{name}</h3>

          {discountPercentage && (
            <div className="discount-badge">
              <span>{discountLabel || "Giảm giá"}</span>
              <strong>{discountPercentage}%</strong>
            </div>
          )}

          <p>{formattedPrice}</p>

          {description && <p>{description}</p>}

          {ratingValue && numberOfReviews && (
            <div className="rating-info">
              <span>
                {ratingValue.toFixed(1)} <i className="fas fa-star"></i>
              </span>
              <span>({numberOfReviews})</span>
            </div>
          )}
        </a>
      </StyledProductCard>
    );
  }
);

