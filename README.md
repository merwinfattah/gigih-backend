# Waralobby Backend
This project is the backend part of the Waralobby website. This is an API that will return JSON for the Waralobby website.

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

# TODO => API/ENDPOINT LIST, HOW TO RUN, HOW TO TEST, DOCKERFILE
