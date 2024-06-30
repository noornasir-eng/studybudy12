import React from 'react';

const Chash: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">C#</h3>
      <div className="space-y-4">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GhQdlIFylQ8"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0QUgvfuKvWU"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Chash;
