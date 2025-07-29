import React from "react";

const Gallery = () => {
    const images = [
        "/picture1.jpg",
        "/Mockup art by maryam.jpg",
        "/gallery3.png",
        "/Celestial Laptop Mockup.jpg",
        "/FigmaGallery.jpg",
    ];
    const rotations = [
        "-rotate-2",
        "rotate-1",
        "-rotate-1",
        "rotate-2",
        "-rotate-3"
    ];

    return (
        <div
            className="relative left-1/2 -translate-x-1/2 overflow-hidden z-10 py-8"
            style={{ width: "100dvw" }} //
        >
            <div className="flex justify-center items-center gap-6">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Showcase ${index + 1}`}
                        className={`aspect-[299/329] w-[180px] sm:w-[220px] md:w-[299px] object-cover rounded-[32px] shadow-lg transition-transform duration-300 ${rotations[index % rotations.length]}`}
                />
                    ))}
            </div>
        </div>
    );
};

export default Gallery;