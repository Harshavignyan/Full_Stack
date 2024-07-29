# Multer File Upload Example

This repository demonstrates a simple file upload feature using Express and Multer. The uploaded files are stored in directories named after the username provided in the form.

## Features

- Handles file uploads with Multer.
- Stores uploaded files in user-specific directories.
- Parses JSON and URL-encoded request bodies.
- Serves static files from the `public` directory.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/multer-file-upload-example.git
    cd multer-file-upload-example
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    node server.js
    ```

2. Open your browser and navigate to `http://localhost:9999`.

3. Fill out the form with a username and select a file to upload.

4. Click the "Submit" button to upload the file.

## Code Explanation

### Server (server.js)

```javascript
const express = require('express');
const multer = require('multer');
var fs = require("fs");
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public/index.html"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        const path = `uploads/${req.body.username}/`;
        if (!fs.existsSync(path)) {
            file.path = path;
            fs.mkdirSync(path);
            callback(null, path);
        } else {
            file.path = path;
            callback(null, path);
        }
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/profile', upload.single('avatar'), (req, res) => {
    console.log(req.file, req.body);
    res.send("file and body received");
});

app.listen("9999", () => {
    console.log("server running on 9999");
});

```

### HTML (public/index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload with Multer</title>
</head>
<body>
    <h1>Hello, This is <b>MULTER</b></h1>
    <form action="/profile" method="post" enctype="multipart/form-data">
        <input type="text" name="username" placeholder="Enter username">
        <br><br><br>
        <input type="file" name="avatar">
        <br><br><br>
        <button>Submit</button>
    </form>
</body>
</html>
```
## License
``` bash
This project is licensed under the MIT License.
```