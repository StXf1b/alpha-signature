// ? TO DO:
// ? Add a fade out when pressing the button inside the footer

// import 
import "../../styles/settings.css";
import "./Modal.css";
import { useState, useEffect } from "react";


/*
 Props:
    * isOpen: boolean → Controls the visibility of the modal
    * onClose: function → Callback function to close the modal
    * title: string → Title of the modal
    * children: ReactNode → Content to be displayed inside the modal
    * footer: ReactNode → Content to be displayed in the modal footer
    * icon: ReactNode → Icon to be displayed in the modal header (react-icons)
*/

export function Modal({ isOpen, onClose, title, children, footer, icon }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false); 
    // Handle open/close transitions (fade In / fade Out)
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true); // Mount modal 
        } else if (isVisible) {
        // Trigger closing animation
            setIsClosing(true);
        const timeout = setTimeout(() => {
            setIsClosing(false);
            setIsVisible(false); // Unmount after animation
        }, 300);
        return () => clearTimeout(timeout);
        }
    }, [isOpen, isVisible]); // Track open/close state changes

    // Unmount modal
    if (!isVisible) return null;

    // Handle close (fade out)
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    }

    return (
        <div className={`modal-overlay ${isClosing ? "closing" : ""}`} onClick={handleClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <header className="modal-header">
                    {icon && <span className="modal-icon">{icon}</span>} {/* (react-icons) */}
                    {title} 
                </header>
                <div className="modal-content">
                    {children}
                </div>
                {footer &&
                    <footer className="modal-footer">
                        {footer}
                    </footer>
                }
            </div>
        </div>
    
  );
}