import React from 'react';

const JantarMantarStreetView = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1697462400000!6m8!1m7!1sCAoSLEFGMVFpcE5mcjRKS0l2RzY5OFhxNzBSTGlVYzNXTlN6VGRXYnFTVkpXTUZx!2m2!1d28.62709!2d77.21648!3f0!4f0!5f0.7820865974627469"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Jantar Mantar Delhi Street View"
      />
    </div>
  );
};

export default JantarMantarStreetView;


