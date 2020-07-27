const remoteURL = "http://localhost:8088/";

let noteQuery = ``;


export default {
  GetAll(str) {
    return fetch(`${remoteURL}${str}`).then((res) => res.json());
  },
  GetAllSort(str) {
    console.log(noteQuery);
    return fetch(`${remoteURL}${str}${noteQuery}`).then((res) => res.json());
  },
  Get(str, id) {
    return fetch(`${remoteURL}${str}/${id}`).then((res) => res.json());
  },

  GetUsersNotes(str) {
    return fetch(
      `${remoteURL}${str}?activeUserId=${sessionStorage.noteId}&_expand=user`
    ).then((res) => res.json());
  },
  GetAllNotes(str) {
    return fetch(`${remoteURL}${str}?_expand=user`).then((res) => res.json());
  },

  Push(str, obj) {
    return fetch(`${remoteURL}${str}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  },

  Update(str, id, data) {
    return fetch(`${remoteURL}${str}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  Delete(str, id) {
    return fetch(`${remoteURL}${str}/${id}`, {
      method: "DELETE",
    });
  },

  // SortingByNote(noteArray) {
  //   console.log(noteArray);

  //   let sortString = "";
  //   sortString += `?`;

  //   for (let note of noteArray) {
  //     sortString += `userId=${note.userId}&`;
  //   }
  //   sortString += `userId=${sessionStorage.userId}`;
  //   console.log(sortString);
  //   noteQuery = sortString;
  // },

  // SortingByNote(noteArray) {
  //   console.log(noteArray);

  //   let sortString = "";
  //   sortString += `?`;

  //   for (let note of noteArray) {
  //     sortString += `userId=${note.userId}&`;
  //   }
  //   sortString += `userId=${sessionStorage.userId}`;
  //   console.log(sortString);
  //   noteQuery = sortString;
  // },

  ////MeetUPs Stretch Goal

  //   delete(id) {
  //     return fetch(`${remoteURL}events/${id}`, {
  //       method: "DELETE",
  //     });
  //   },
  //   edit(id) {
  //     return fetch(`${remoteURL}events/${id}`, {
  //       method: "EDIT",
  //     });
  //   },
  PostNotes(obj) {
    return fetch(`http://localhost:8088/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  },
};
