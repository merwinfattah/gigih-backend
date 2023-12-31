# Waralobby Backend
This project is the backend part of the Waralobby website. This is an API that will return JSON for the Waralobby website.
- Frontend: ```https://waralobby-ui.vercel.app/```
- Backend: ```https://waralobby.mrayhanfadil.my.id/api```

## Database Structure
The database is using MongoDB utulizing mongoose. The default database url was stored in ```.env``` file refered as ```DATABASE_URL```. The default value is :
```
DATABASE_URL = mongodb://localhost:27017/maindb
```

There is 4 collection inside the database :
- ```applies```
- ```blog```
- ```franchises```
- ```history```
- ```users```

### applies
This collection using ```application``` db schema 
```
    franchisee_id: {
        type: String,
    },
    franchisee_name: {
        type: String,
    },
    franchisee_address: {
        type: String,
    },
    franchisee_placeDateBirth: {
        type: String,
    },
    franchisee_phone: {
        type: String,
    },
    franchise_name: {
        type: String,
    },
    franchise_address: {
        type: String,
    },
    franchise_phone: {
        type: String,
    },
    funding_capital: {
        type: Number,
    }
```

### blog
This collection serve as Blog database using ```blog``` db schema
```
    title: {
        type: String,
    },
    date: {
        type: Date,
    },
    content: {
        type: String,
    }
```

### franchises
This collection server as Franchise database using ```franchises``` db schema
```
    name: {
        type: String,
    },
    img: {
        type: String,
    },
    description: {
        type: String,
    },
    owner: {
        type: String,
    },
    location: {
        type: String,
    },
    capital: {
        type: Number,
    }
```

### history
This collection serve as User's Application History database using ```history``` db schema
```
    userId: {
        type: String,
    },
    applicationDate: {
        type: Date,
    },
    franchiseName: {
        type: String,
    },
    franchiseAddress: {
        type: String,
    },
    franchisePhone: {
        type: String,
    },
    status: {
        type: String,
    }
```

### users
This collection serve as User database using ```users``` db schema
```
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    rolename: {
        type: String,
    },
    phoneNumber: {
        type: String,
    }
```

## API Structure
The structure consist of several files and folders:
- /
  - ```app.js``` server service config, middleware
  - ```.env```
  - ```package-lock.json```
  - ```package.json```
  - routes
    - ```routes.js``` API router (endpoint router)
  - model
    - ```applyModel.js``` User's Application database model
    - ```blogModel.js``` Blog database model
    - ```franchiseModel.js``` Franchise database model
    - ```historyModel.js``` User's Application History database model
    - ```userModel.js```User database model
  - services
    - ```applyService.js``` User's Application database query
    - ```blogService.js``` Blog database query
    - ```franchiseService.js``` Franchise database query
    - ```historyService.js``` User's Application History database service
    - ```userService.js```User database query
  - controller
    - ```applyController.js``` User's Application API logic
    - ```blogController.js``` Blog API logic
    - ```franchiseController.js``` Franchise API logic
    - ```historyController.js``` User's Application History API logic
    - ```userController.js```User API logic
  - database
    - ```db_connect.js``` database connection agent

The server will start after ```app.js``` being run. The ```app.js``` act as the entry for the API the it will send to the ```./routes/routes.js``` to handle the API request. The ```./routes/routes.js``` will forward the logic to the controller inside the ```./controller``` using the query method from ```./services``` based on database schema in ```./model```.

## API/Endpoint List

### GET /api/history/userId
Return application history based on userId
- URL Params:
  - Required ```userId = string```
- Data Params:
  - None
- Headers:
Content type : application/json
- Succes Response:
  - code: 200
  - content:
```
{
  "_id": string,
  "userId": string,
  "applicationDate": date,
  "franchiseName": string,
  "franchiseAddress": strinig,
  "franchisePhone": string,
  "status": string,
}
```

### GET /api/:userId/profile
Return user profile
- URL Params:
  - Required ```userId = string```
- Data Params:
  - None
- Headers:
Content type : application/json
- Succes Response:
  - code: 200
  - content:
```
{
  "_id": string,
  "username": string,
  "password": string,
  "email": string,
  "rolename": string,
  "phoneNumber": string,
}
```
### POST /api/signin
Send email and password then return access token.
- URL Params: none
- Data Params:
  ```
  {
      "email" : string,
      "password" : integer
  }
  ```
- Headers:
Content type : application/json
- Succes Response:
  - code: 200
  - content:
    ```
    {
        "token": string
    }
    ```
### POST /api/signup
Send new signup user data
- URL Params: none
- Data Params:
  ```
    {
      "_id": string,
      "username": string,
      "password": string,
      "email": string,
      "phoneNumber": string,
    }
  ```
- Headers:
Content type : application/json
- Succes Response:
  - code: 201
  - content: none

### GET /api/franchises
Return list of available franchises
- URL Params: none
- Data Params: none
- Headers:
Content type : application/json
- Succes Response:
  - code: 200
  - content:
  ```
  {
  "_id": string,
  "name": string,
  "img": string,
  "description": string,
  "owner": string,
  "location": string,
  "capital": number
    }
  ```

### GET /api/franchises/:franchiseId
Return one spesific franchise based on franchiseId
- URL Params:
  - Required ```franchiseId = string```
- Data Params: none
- Headers:
Content type : application/json
- Succes Response:
  - code: 200
  - content:
  ```
  {
  "_id": string,
  "name": string,
  "img": string,
  "description": string,
  "owner": string,
  "location": string,
  "capital": number
    }
  ```
### GET /api/blog
Return list of available blog article
- URL Params: none
- Data Params: none
- Headers:
  Content type : application/json
  - Succes Response:
  - code: 200
  - content:
  ```
    {
      "_id": string,
      "tile": string,
      "content": string,
    }
  ```

### GET /api/blog/blogId
Return specific blog article based on blogId
- URL Params:
    - Required ```blogId = string```
- Data Params: none
- Headers:
  Content type : application/json
  - Succes Response:
  - code: 200
  - content:
  ```
    {
      "_id": string,
      "tile": string,
      "content": string,
    }
  ```

### POST /api/apply
Send application data
- URL Params: none
- Data Params:
```
{
  "_id": string,
  "franchisee_id": string,
  "franchisee_name": string,
  "franchisee_address": string,
  "franchisee_placeDateBirth": string,
  "franchisee_phone": string,
  "franchise_name": string,
  "franchise_address": string,
  "franchise_phone": string,
  "funding_capital": number,
}
```
- Headers:
  Content type : application/json
  - Succes Response:
  - code: 201
  - content: none

## How To Run
1. Clone the repo
   ```
   git clone https://github.com/merwinfattah/gigih-backend.git
   ```
2. Install the dependencies
   ```
   npm install
   ```
3. Build the database.
   - for the ```user``` data base, it will populate when you send data do the ```/api/signup``` endpoint based on the database structure mentioned above.
   - for the ```applies``` and history, it will pulate when you send data do the ```/api/apply``` endpoint based on the database structure mentioned above.
   - for the ```blog``` and ```franchises``` needs to be populated manually from the mongodb itself based one the database structure mentioned above.
4. Create ```.env``` file then input the followin variable :
   - ```PORT = ``` input with the value of port you want the server running.
   - ```DATABASE_URL = ``` input the value of your ```mongodb``` database link.
6. Run the server
   ```
   node app.js
   ```
7. Test the API
   The servir will run on :
   ```
   http://localhost: PORT = ?
   ```
    ### For Docker
    If you want to use docker, before building the docker image you can change the exposed port in the ```.env (PORT = )``` and in the ```Dockerfile (EXPOSE ...)```, the value of ```.env (PORT = )``` and ```Dockerfile (EXPOSE ...)``` should be the same.
   
## How To Test
Simply by sending HTTP request base on the ```Endpoint List```.
