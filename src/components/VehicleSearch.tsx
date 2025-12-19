import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const VehicleSearch = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10"
        >
          <h2 className="section-title">
            Search by<br />Vehicle
          </h2>
          <p className="text-muted-foreground font-body max-w-md">
            <span className="text-primary">*</span> Filter your results by entering your Vehicle to ensure you find the parts that fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          <div className="relative">
            <select className="select-field w-full border-r-0">
              <option>SELECT MAKER</option>
              <option>BBT Motors</option>
              <option>FlowCell</option>
              <option>HKS Sport</option>
              <option>Masell</option>
              <option>Nio Motorss</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
          <div className="relative">
            <select className="select-field w-full border-r-0">
              <option>SELECT MODEL</option>
              <option>110kW</option>
              <option>135kW</option>
              <option>150kW</option>
              <option>170kW</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
          <div className="relative">
            <select className="select-field w-full border-r-0">
              <option>SELECT YEAR</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
          <button className="btn-primary text-center justify-center">
            Search Parts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VehicleSearch;
