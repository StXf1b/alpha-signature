import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { FaTimes, FaPlay } from "react-icons/fa";
import PageTransition from "../../components/PageTransition/PageTransition"
export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const mediaItems = [
    {
      src: "https://picsum.photos/400/500?random=1",
      title: "Classic Cut",
      description: "Timeless style with clean lines.",
      type: "image",
    },
    {
      src: "https://picsum.photos/400/400?random=2",
      title: "Skin Fade",
      description: "Sharp and modern fade look.",
      type: "image",
    },
    {
      src: "https://picsum.photos/400/500?random=3",
      title: "Luxury Beard Trim",
      description: "Precision beard shaping and definition.",
      type: "image",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Studio Experience",
      description: "Our barbers in action — craftsmanship at work.",
      type: "video",
    },
    {
      src: "https://picsum.photos/400/500?random=4",
      title: "Hot Towel Shave",
      description: "Relaxing and professional finish.",
      type: "image",
    },
    {
      src: "https://www.w3schools.com/html/movie.mp4",
      title: "Transformation Cut",
      description: "Watch the before and after magic.",
      type: "video",
    },
  ];

  const openMedia = (src, type) => {
    setSelectedMedia(src);
    setMediaType(type);
    document.body.style.overflow = "hidden";
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    setMediaType(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeMedia();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <PageTransition>
      <section className="gallery-section">
        <div className="gallery-header">
          <h1>Gallery</h1>
          <p>Discover our craftsmanship — a blend of tradition, creativity, and precision.</p>
        </div>

      <div className="gallery-grid">
        {mediaItems.map((item, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openMedia(item.src, item.type)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.title} loading="lazy" />
            ) : (
              <>
                <video muted>
                  <source src={item.src} type="video/mp4" />
                </video>
                <div className="play-overlay">
                  <FaPlay />
                </div>
              </>
            )}
            <div className="hover-info">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div className="lightbox" onClick={closeMedia}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeMedia}>
              <FaTimes />
            </button>
            {mediaType === "image" ? (
              <img src={selectedMedia} alt="Enlarged view" />
            ) : (
              <video controls autoPlay>
                <source src={selectedMedia} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  </PageTransition>
  );
}
