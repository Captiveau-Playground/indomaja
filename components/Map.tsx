const Map = () => {
  return (
    <section id="map" className="reveal relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <iframe 
        src="https://www.google.com/maps?q=-7.845191,110.3324378&z=16&output=embed" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Indomaja Location"
        className="w-full h-full"
      ></iframe>
    </section>
  );
};

export default Map;
