## URL shortener
An simple app that transforms the format of an url and provides a service to redirect the shortened-url

### Main Page
![]()

### Features
User can
- check if the url exists
- get an non-repeated formatted url for the same provided url
- link to the original url by using the formatted url (when server runs)
- copy the result url by just clicking the Copy button

### Quick Start
```
# Create a project folder to start
mkdir <project-folder>
cd <project-folder>

# Clone the project
git clone https://github.com/elliottwuTW/url-shortener.git

# Install all dependencies
npm install

# Generate the seed data
npm run seed

# Run the Express server
npm run start

# Or run the server with nodemon
npm run dev

# As the server starts successfully, the terminal will show "The server is running on http://localhost:3000" or "The server is running on https://safe-sands-31680.herokuapp.com/" depending on the runtime.
```

### Package Versions
- Node.js : 14.4.0
- express : 4.17.1
- express-handlebars : 5.1.0
- body-parser : 1.19.0
- mongoose : 5.10.9
- url-exist : 2.0.2


### App Info
#### Author
Elliott Wu [elliottwuTW](https://github.com/elliottwuTW)

#### Version
1.0.0
