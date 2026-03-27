import React from "react";

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: string;
  originalPrice?: string;
}

const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  category,
}: ProductCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex gap-4 hover:shadow-md transition-all duration-300">
      
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Content */}
      <div className="flex flex-col justify-between flex-1">
        
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {category}
          </p>

          <h3 className="font-heading text-sm font-semibold leading-snug mt-1">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-foreground font-semibold text-sm">
            {price}
          </span>

          {originalPrice && (
            <span className="text-xs line-through text-muted-foreground">
              {originalPrice}
            </span>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductCard;



