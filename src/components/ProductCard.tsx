import { motion } from "framer-motion";
import { Heart, ArrowLeftRight, Eye, MessageCircle } from "lucide-react"; // Added MessageCircle

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: string;
  originalPrice?: string;
  delay?: number;
}

const ProductCard = ({ image, category, title, price, originalPrice, delay = 0 }: ProductCardProps) => {

  // LOGIC: WhatsApp Inquiry Handler
  const handleInquiry = () => {
    const message = encodeURIComponent(`Hi Revoro, I am interested in: ${title}`);
    window.open(`https://wa.me/971500000000?text=${message}`, '_blank'); // Replace with your number
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="product-card group border border-border/20"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-card aspect-square">
        <img
          src={image}
          alt={title}
          className="product-card-image object-cover w-full h-full"
        />

        {/* Quick Actions - Use for View Details or Wishlist UI feel */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <button className="icon-btn bg-background/80 backdrop-blur-sm ">
            <Heart className="w-4 h-4" />
          </button>
          <button className="icon-btn bg-background/80 backdrop-blur-sm ">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Action Button - Pivoted to Inquiry instead of Cart */}
        <div className="absolute bottom-0 left-0 right-0 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleInquiry}
            className="w-full bg-primary text-primary-foreground py-3 font-heading text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Check Availability
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="category-tag mb-2 text-primary/80 font-medium text-xs tracking-widest">{category}</p>
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        {/* <div className="flex items-center gap-3">
          <span className="price-tag font-bold">{price}</span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">{originalPrice}</span>
          )}
        </div> 
        */}

        {/* Status Tag - Good for non-ecommerce catalog */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] uppercase text-muted-foreground tracking-tighter">In Stock - Al Quoz Branch</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;