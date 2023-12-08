# `REACT-PROJECT`

# Description

`React-project` designs and implements a `web` application (`Single Page Application`) using for UI `React` libriry for `JavaScript` and for back-end  `RESTfull Api`* - *SoftUni Practice Server* to feching response of requests.

The `Web application` is a `site` for a company that deals with `Occupational medicine`.

## The application have:

* Public Part (Accessible without authentication)
* Private Part (Available for Registered Users)

## `UI` have specific views:

* Catalogs – list of all medical records and company services.
  Services offered by the company are publicly visible, medical files/cards/ are reviewed by a registered user.

* Details – information about a specific record

* Collection - `posts` and `comments` have all `CRUD` operations  to create, read, update and delete `medical cards`. 

* Logged-in users `create` entries in the `posts` collection and make `relationship` to the `comments` collection - intended for entering diagnoses to a specific medical card by postId. 

* Logged in (author) –  able to `Edit / Delete` their records.

* A Guest have access to basic website information (catalog, details), but not to the functional activities

## `React-project` web application  `Techniques`:

* Use React.js for the client-side.
* Communicate to a remote service (via REST)
* Implement authentication
* Implement client-side routing
* Use of programming concepts, specific to the React library: functional components, bound forms, synthetic events, Component Styling, React Hooks, Context API and etc.
* Applys error handling and data validation to avoid crashes when invalid data is entered


## React-project App `Structure`:

* The project is created with `Vite`

  https://vitejs.dev/guide/
  
* `package.json` - project configuration
   - module name, dependencies, build actions

* `index.html`
   - app main HTML file

* `main.jsx`
    - app main JS file (startup script)

* `App.jsx`
    - React component "App"

* libriry `Bootstrap 4.3.1` and custom css in React components `.module.css`


# `SetUp` and `Run` project

Star this REACT project follow this steps:

1. `Clone` repository in own folder
```
git clone https://github.com/valiapatova/react-project.git
```

2. `Open` the project folder `react-project` in Visual Studio Code or in PowerShell or CMD.


3. `Start` the RESTfull `Api server`


Open folder `react-project/server` in **Integrated Terminal**  or in Powershell or CMD and  run command.
```
node server.js
```

4. Install `npm packages` (you must have installed `node.js`):

`Open` folder `react-project/client` in **Integrated Terminal** or in Powershell or CMD and  run command.
```
npm install
```

5. `Run` react-project from folder `react-project/client` with command
```
npm run dev
```

You will see message:
```
Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Run from Web Browser
```
http://localhost:5173/
```


## `React-project` uses RESTfull Api - `SoftUni Practice Server` to feching response of requests.

### SoftUni Practice Server

For more information: https://github.com/softuni-practice-server/softuni-practice-server

## Usage

This is **REST service**, created for educational purposes. To execute it, open a command prompt and run `node server.js`.

```
> cd server
> node server.js
```

Note that changes to the data **will not be persisted**! All operations happen in memory and will be wiped when the service is restarted.

## Collections

**Detailed information on the usage of the Collections REST service.**

https://github.com/softuni-practice-server/softuni-practice-server/blob/master/COLLECTIONS.md

This service uses authentication - reading resources is public, but creating, updating and deleting can only be performed by authorized users. Additionally, only the original creator of a resource can edit or delete it (barring any special CLP or ACL rules for the record).

A tyipical request will have the following shape:

```
POST /data/collectionName
Content-Type: application/json
X-Authorization: {accessTokenFromAuthService}
[Request body]
```

## CRUD Operations

**Read**
An end point is revealed at /data, which grants access to information, stored on the service. GET requests to the service will return the following responses:

GET /data/:collection - array of all entries in target collection; will return 404 if collection does not exist

GET /data/:collection/:id - entry matching the given ID; will return 404 if collection or entry do not exist with appropriate message attached to response

**Create**
This request requires authorization and content-type headers (see above).

Send POST request to /data/:collection to create new entry. ID will be generated automatically and will be included in the returned object. If the collection does not exist, it will be created.

**Update**
This request requires authorization and content-type headers (see above). Only the owner of the resource can edit it.

Send PUT request to /data/:collection/:id to update a single entry. Note that the existing entry will be replaced!

**Delete**
This request requires authorization headers (see above). Only the owner of the resource can delete it.

Send DELETE request to /data/:collection/:id to delete a single entry.


## Base URL

The Base URL for the API is: `http://localhost:3030/data`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.


## ***In*** `REACT-PROJECT` ***have been created  3 collections*** - `posts, services, comments` ***and data has been **seeded** into the server.***

### Endpoints: `posts`

http://localhost:3030/data/posts/ 

- `/posts` -- get cards list/ create card;
- `/posts/{postId}` -- get card/update card/ delete card by provided id;;

### Get card list

Send a `GET` request to `/posts`. The service will respond with an array of card objects.

### Success Response:

Code: 200 OK

Content:
Example:

```
[
    {
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "title": "some string",
        "category": "some string",
        "maxLevel": "29",
        "imageUrl": "https://res.cloudinary.com/doifgnlmu/image/upload/v1699963837/nedicalSimbol2_tttmlq.png",
        "summary": "Открити заболявания - IE11 - Хипертония, придружаващо заболяване E11.0 - Захарен диабет",
        "_createdOn": 1701270598461,
        "_id": "4215d709-bf77-475f-8bb4-e6443d9cd3bf"
    },
     ...
]
```

### Endpoints: `services`

http://localhost:3030/data/services/ 

- `/services` -- get service list  
- `/services/{serviceId}` -- get service by provided id;

```
[
   {
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "title": " Some title string...",
        "category": " some category string...",
        "maxLevel": "some number...",
        "imageUrl": " some imageUrl ...",
        "summary": " some description of service... ",
        "_createdOn": 1701270598461,
        "_id": "3564027f-adcd-4425-b2c0-1253d2386c0c"
    },
    ...
]
```

### Endpoints: `comments`

http://localhost:3030/data/comments/ 

- `/comments` -- get comment list  

- `/comments?postId={postId} -- get all comments for provided by query parameter **postid**;

**Example**:

http://localhost:3030/data/comments?postId=3564027f-adcd-4425-b2c0-1253d2386c0c


**Response** from server:

```
[
    {
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "content": "I11 - хипертония",
        "postId": "4215d709-bf77-475f-8bb4-e6443d9cd3bf",
        "_createdOn": 1701270598461,
        "_id": "0a272c58-b7ea-4e09-a000-7ec988248f66"
    }
]
```

References:

https://vitejs.dev/guide/

https://react.dev/

https://legacy.reactjs.org/

https://softuni.bg/trainings/4238/reactjs-october-2023