const GridGallery = ({ images, title, subtitle }: {
    images: string[];
    title: string;
    subtitle: string;
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title and Subtitle */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-500">{title}</h2>
        <p className="text-white mt-2">{subtitle}</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-60  overflow-hidden shadow-lg">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridGallery;