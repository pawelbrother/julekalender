import { useState } from "react";

interface LukeProps {
  date: number; // Expecting an ISO string for the date
  setShowBrus: (value: boolean) => void; // Function to set the showBrus state
}

export default function Luke({date, setShowBrus}: LukeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);  // Track visibility after animation

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAnimationEnd = () => {
    // Once the animation ends and the door is open, hide the component
    if (isOpen) {
      setIsVisible(false);
      setShowBrus(true);
    }
  };

  return (
    <div
      className="relative w-48 h-48"
      onClick={handleToggle}
    >

      {/* The red "door" */}
      {isVisible && (
        <div
          className={`absolute inset-0 bg-red-600 text-white flex items-center justify-center text-8xl font-bold border border-white transform transition-transform duration-700 select-none ${
            isOpen ? "translate-x-[-100%]" : "translate-x-0"
          }`}
          onTransitionEnd={handleAnimationEnd} // Detect when animation ends
        >
          {date}
        </div>
      )}
    </div>
  );
}
