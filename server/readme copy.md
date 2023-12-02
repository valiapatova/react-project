# REACT-PROJECT

## Description


## SetUp and Run the project

Star this REACT project follow this steps:

1. Clone repository in own folder
```
git clone https://github.com/valiapatova/react-project.git
```

2. Open the project folder react-project in Visual Studio Code.

3. Start the RESTfull Api server 

Open folder react-project/server in **Integrated Terminal** and  run command from folder **react-project/server** in Powershell 
```
server.js
```
4. Install **npm packages** (you must have installed **node.js**):

Open folder **react-project/client** in **Integrated Terminal** and  run from Powershell  
```
npm install
```
5. Run react-project from **client** folder with command
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

**REACT-PROJECT** uses **RESTfull Api** - **SoftUni Practice Server** to fech requests.

# SoftUni Practice Server

For more information: https://github.com/softuni-practice-server/softuni-practice-server

## Usage

This is **REST service**, created for educational purposes. To execute it, open a command prompt and run `node server.js`.

```
> cd server
> node server.js
```

Note that changes to the data **will not be persisted**! All operations happen in memory and will be wiped when the service is restarted.

# Collections

# Detailed information on the usage of the Collections REST service.

https://github.com/softuni-practice-server/softuni-practice-server/blob/master/COLLECTIONS.md

# Collections

This service uses authentication - reading resources is public, but creating, updating and deleting can only be performed by authorized users. Additionally, only the original creator of a resource can edit or delete it (barring any special CLP or ACL rules for the record).

A tyipical request will have the following shape:

```
POST /data/collectionName
Content-Type: application/json
X-Authorization: {accessTokenFromAuthService}
[Request body]
```

# CRUD Operations

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

For **REACT-PROJECT** have been created  3 collections - **posts, services, and comments** and data has been **seeded** into the server. 

# Endpoints: posts

- `/posts` -- get cards list/ create card;
- `/posts/{postId}` -- get card/update card/ delete card by provided id;;

## Get card list

Send a `GET` request to `/posts`. The service will respond with an array of card objects.

### Success Response:

Code: 200 OK

Content:
For Example:

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

# Endpoints: services

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

# Endpoints: comments

http://localhost:3030/data/comments/ 

- `/comments` -- get comment list  

- `/comments?postId={postId} -- get all comments for provided by query parameter **postid**;

**For example**:

http://localhost:3030/data/comments?postId=3564027f-adcd-4425-b2c0-1253d2386c0c

**Response** from server:

[
    {
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "content": "I11 - хипертония",
        "postId": "4215d709-bf77-475f-8bb4-e6443d9cd3bf",
        "_createdOn": 1701270598461,
        "_id": "0a272c58-b7ea-4e09-a000-7ec988248f66"
    }
]