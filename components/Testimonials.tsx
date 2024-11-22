import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";
import { TestimonialItems } from "../index";

export function Testimonials() {
  const testimonials = TestimonialItems.map((item) => (
    {
      quote: item.quote || "",
      name: item.name || "",
      designation: item.designation || "",
      src: item.src || "",
    }
  ));

  return <div id="Testimonials" className="bg-grid-black-100/[0.005] dark:bg-grid-white/[0.01]">
    <AnimatedTestimonials testimonials={testimonials} />;
    </div>
}

export default Testimonials;
