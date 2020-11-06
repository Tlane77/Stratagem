# Stratagem: The Information Dashboard
## Mentor Rose Wisotzky
## Setup: Follow these steps exactly

1. Clone this repository
2. `cd` into the directory it creates
3. Make a `database.json` file in the `api` directory


> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

## Highlight

Stratagem is a new product offering a place for developers to store all their data. It's a dashboard application for people to store their developer resources, and share with others.
# STRATAGEM
STRATAGEM is a web app with full CRUD functionality that allows the user to collect resources related to developing. The entries are then sorted into a cards with a title, subject, url, and a memo about the resource. The user can search their resource cards by subject. The user can edit and update content

* **Functional:** Every user can have their own resources. Having piece of mind to locate resources quick and find tools you use everyday.
* **Responsive:** STRATAGEM was designed with responsiveness in mind, it will adjust to any screen size.
* **CRUD:** STRATAGEM entries contain full CRUD (Create, Read, Update, Delete) functionality.

Technologies used to create STRATAGEM include [React.js](https://github.com/youtube/create-react-app), [JSON server](https://github.com/typicode/json-server), REACT, reactstrap bootstrap, JavaScript, CSS, and HTML.

## Screenshots
<img src="https://raw.githubusercontent.com/tashalane/stratagem/master/public/readmeimg1.png" width=768px>
<img src="https://raw.githubusercontent.com/tashalane/stratagem/master/public/readmeimg2.png" width=320px>
<img src="https://raw.githubusercontent.com/tashalane/stratagem/master/public/readmeimg3.png" width=320px>
 
## Installation
1. Clone this repository.
2. `cd` into the directory it creates.
3. `npm install` to install React.js.
4. `cd` into the `api` directory and enter `json-server -p 8088 -w database.json` to serve the `database.json` file.
5. `cd` into the main directory and `npm start` to make the app accessible via a web browser.
 
## Using STRATAGEM
1. Register a new account. **Do not use any sensitive credentials. This is not a secure application.**
1. Log in with the credentials you created, or use the credentials already provided in the `database.json`, `happy@live.com`.
1. Resources will be generated one at a time, then can be edited later. Notes can be added after initial resource card multiple times.
1. To create a new entry, click the “Add Resource” button located at the top left.
1. Fill out all the fields in the new entry form.
    * **Title:** Title your entry for personal reference.
    * **SUBJECT:** Search your subject with the subject dropdown. A list representation of the subjects to choose from will appear at the start of each entry.
    * **Url:** The Url for the tutorial or website where you found resources or tools to help will make it easier to go straight to source.
    * **Memo:** The memos for the resources card will help you remember what the resource is helpful doing.

    * **Date:** Enter the date you found your resource. Entries are sorted in descending order of entry. Multiple notes 
    
    
1. To edit a resource, hover over an existing resource and click the blue highlighted edit button that appears to the left.
1. To delete an entry, hover over an existing entry and click the blue highlighted button that appears to the left.



You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

1. Functions
2. Databases
3. Github
4. Objects
5. CSS/Flexbox
6. Array methods
7. Components
8. Handling user events
9. Implementing CRUD operations
10. Relational data 
11. ERDs Stratagem https://dbdiagram.io/d/5f1861321e6ca02dc1a43ddf
12. WIREFRAME: Login Page https://fqx7h7.axshare.com

To start you off, here's an example of what the resources in your API should look like once it's populated with some data from your application.

### Users

```json
{ "id": 1, "username": "Tasha", "email": "me@me.com", "password": "xxxx" }
```

### Notes

```json
{ "id": 1, "userId": 1, "resourceId": "note": "string" "date": "datetime"  }
```

### Resources

```json
{ "id": 1, "userId": 3, "resourceId": "How to Create CRUD" "subjectId": 1, }
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## install `react-bootstrap`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# Stratagem
