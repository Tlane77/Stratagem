const remoteURL = "http://localhost:8088";

export default {
  get(id) {
    return fetch(`${remoteURL}/notes/${id}`).then((result) =>
      result.json()
    );
  },
  getAll(id) {
    return fetch(`${remoteURL}/notes/${id}`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/notes/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newNote) {
    return fetch(`${remoteURL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    }).then((data) => data.json());
  },
  update(editedNote) {
    return fetch(`${remoteURL}/notes/${editedNote.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedNote),
    }).then((data) => data.json());
  },
  // Add this method to the NoteManager object
  getRandomId() {
    return fetch(`${remoteURL}/notes`)
      .then((result) => result.json())
      .then((notes) => {
        const randomIndex = Math.floor(Math.random() * notes.length);
        const randomNote = notes[randomIndex];
        return randomNote.id;
      });
  },
  getWithResources(noteTaco) {
    return fetch(
      `${remoteURL}/notes?resourceId=${noteTaco}`
    ).then((result) => result.json());
  },
};
