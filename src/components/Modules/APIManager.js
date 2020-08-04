const remoteURL = "http://localhost:8088/";

let noteQuery = ``;

export default {
  getAll(str) {
    return fetch(`${remoteURL}${str}`).then((res) => res.json());
  },
  getAllSort(str) {
    console.log(noteQuery);
    return fetch(`${remoteURL}${str}${noteQuery}`).then((res) => res.json());
  },
  get(str, id) {
    return fetch(`${remoteURL}${str}/${id}`).then((res) => res.json());
  },

  getUsersNotes(str) {
    return fetch(
      `${remoteURL}${str}?activeUserId=${sessionStorage.noteId}&_expand=user`
    ).then((res) => res.json());
  },
  getAllNotes(str) {
    return fetch(`${remoteURL}${str}?_expand=user`).then((res) => res.json());
  },
  getUsersResources(str) {
    return fetch(
      `${remoteURL}${str}?activeUserId=${sessionStorage.resourceId}&_expand=user`
    ).then((res) => res.json());
  },
  getAllResources(str) {
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

  ////Resources

  postNotes(obj) {
    return fetch(`http://localhost:8088/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  },
  postResources(obj) {
    return fetch(`http://localhost:8088/resources/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  },
};
