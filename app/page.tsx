'use client'
import { useEffect, useState } from "react";
import Luke from "./luke";

export default function Home() {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [showBrus, setShowBrus] = useState(false);

  const currentDate = new Date().getDate(); // Get current date in 'YYYY-MM-DD' format
  const imageSrc = `/${currentDate}.png`;

  return (
    <div className="min-h-screen w-full bg-[url('/bg.png')] bg-cover bg-center">
      <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-80">
        <div className="relative w-48 h-48"> {/* Container for positioning */}
          {showBrus && (
            <img
              src={imageSrc}
              alt={`Image for ${currentDate}`}
              className="absolute inset-0 object-cover z-0 -mt-28"
            />
          )}
          <Luke date={currentDate} setShowBrus={setShowBrus} />
        </div>
      </main>
    </div>
  );
}
