import { Headphones, MapPin, Package, User } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-background border-b border-border/30 py-2.5">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-body">
          <Headphones className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">CALL CENTER:</span>
          <a href="tel:00987513024008" className="text-foreground hover:text-primary transition-colors">
            0098 751 30 2408
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            <MapPin className="w-4 h-4" />
            STORE LOCATOR
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            <Package className="w-4 h-4" />
            TRACK YOUR ORDER
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            <User className="w-4 h-4" />
            MY ACCOUNT
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
