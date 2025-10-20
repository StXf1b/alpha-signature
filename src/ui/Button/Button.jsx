// ? TO DO:
// ? - Add icon support (left/right)
// ? - Add loading state 

// imports 
import "../../styles/settings.css"; // Global variables
import "./Button.css"; // Button-specific styles

/*
 Props:
    * children: The content inside the button (text, icons, etc.)
    * variant: "primary" | "secondary" | "danger" | "cancel" → (default: "primary")
    * onClick: function → Click handler
    * disabled: boolean → Disables the button if true
    * className: string → Extra CSS classes for customization
    * style: React.CSSProperties → Inline styles for the button
*/
export function Button({
    children,
    variant = "primary",
    onClick,
    disabled = false,
    className = "",
    style = {}
}) {
    // * Map of available style variants
    const variants = {
        primary: "primary",
        secondary: "secondary",
        danger: "danger",
        cancel: "cancel"
    };

    return (
        <button
            className={`button ${variants[variant]} ${disabled ? "disabled" : ""} ${className}`}
            onClick={onClick} // * Calls function passed to button
            disabled={disabled} // * Native HTML disabled state for accessibility
            style={{ ...style }} // * Additional inline styles if needed
        >
            {children} {/* Button content */}
        </button>
  );
}
