import React from 'react';

const NoteDetail = ({Note}) => {
  if (!Note) {
    return <div className="loading-Note">.</div>;
  }

  const NoteId = Note.id.NoteId;
  // const url = 'https://www.youtube.com/embed/' + videoId;
  const url =`https://www.youtube.com/embed/${NoteId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9 Note-detail-animation">
      <iframe className="embed-responsive-item" src={url}>
        </iframe>
      </div>
      <div className="details">
        <div className="details-title">
          {Note.snippet.title}
        </div>
        <div className="details-channel-title">
          {Note.snippet.channelTitle}
        </div>
        <div>
          {Note.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;