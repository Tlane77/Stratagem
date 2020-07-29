import React from "react";

const NoteItem = ({ Note, onNoteSelect }) => {
  // const Note = props.Note;
  const imageUrl = Note.snippet.thumbnails.default.url;

  // implement your own date script, this is just an example
  let date = Note.snippet.publishedAt;
  let YYYY = new Date(date).toJSON().slice(0, 4);
  let MM = new Date(date).toJSON().slice(5, 7);
  let DD = new Date(date).toJSON().slice(8, 10);
  let mmName = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };
  date = mmName[MM] + " " + DD + ", " + YYYY;

  return (
    <li
      onClick={() => onNoteSelect(Note)}
      className="list-group-item list-item-custom"
    >
      <div className="Note-list media">
        <div className="media-body">
          <div className="media-heading">{Note.snippet.title}</div>
          <div className="media-heading-channel-title">
            {Note.snippet.channelTitle}
          </div>
          <div className="media-heading-channel-date">{date}</div>
        </div>
        <div className="media-right">
          <img className="media-object" src={imageUrl} />
        </div>
      </div>
    </li>
  );
};

export default NoteItem;
