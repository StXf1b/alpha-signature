// ? TO DO:
// ? - Add more variants 
// ? - Add framer-motion support
// ? - Add shadow props
// ? - Add loading state
// ? - Add padding/margin control via props
// ? - Add animation support (e.g., fade-in, slide-up)
// ? - Add accessibility features (e.g., ARIA roles, keyboard navigation)


// imports
import "../../styles/settings.css"; // Global theme variables
import "./Card.css"; // Card-specific styles

/*  
Props:
  * children: ReactNode → Content inside the card
  * variant: "default" | "shadow" 
  * className: string → Extra CSS classes for customization
  * style: object → Inline styles for customization
*/
export function Card({ children, variant = "shadow", className = "", style = {} }) {
  const variants = {
    default: "card-default",
    shadow: "card-shadow"
    // ? TO DO: add more variants later
  };

  return (
    <div className={`card ${variants[variant]} ${className}`} style={style}> 
      {children} {/* Card content */}
    </div>
  );
}
