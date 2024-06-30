import React from 'react';

const Python: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Python</h3>
      <div className="space-y-4">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rfscVS0vtbw"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_uQrJ0TkZlc"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Python;
