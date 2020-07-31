const remoteURL = "http://localhost:8088/"

let resourceQuery = ``;

export default {
  getAll(str) {
    return fetch(`${remoteURL}${str}`).then((res) => res.json());
  },
  getAllSort(str) {
    console.log(resourceQuery);
    return fetch(`${remoteURL}${str}${resourceQuery}`).then((res) =>
      res.json()
    );
  },
  get(str, id) {
    return fetch(`${remoteURL}${str}/${id}`).then((res) => res.json());
  },

  getUsersResources(str) {
    return fetch(
      `${remoteURL}${str}?activeUserId=${sessionStorage.resourceId}&_expand=user`
    ).then((res) => res.json());
  },
  getAllResources() {
    return fetch(`${remoteURL}resources?_expand=user&_expand=subject`).then((res) =>
      res.json()
    );
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
  update(editedResource) {
    return fetch(`${remoteURL}/notes/${editedResource.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedResource),
    }).then((data) => data.json());
  },

  delete(id) {
    return fetch(`${remoteURL}resources/${id}`, {
      method: "DELETE",
    });
  },
  edit(id) {
    return fetch(`${remoteURL}resources/${id}`, {
      method: "EDIT",
    });
  },

  post(newResource) {
    return fetch(`${remoteURL}resources`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newResource),
    }).then((data) => data.json());
  }
  
};
