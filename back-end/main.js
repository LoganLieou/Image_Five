const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');

const upload = multer({dest: 'upload/'})

const app = new express();

app.use(cors());

let type = upload.single("myFile");

app.post("/", type, (req, res) => {
   temp_path = req.file.path;
   console.log(temp_path);
   // then do some magic to that file...
   // obj = convert_pdf(temp_path)
   // obj.upload_google_drive(api)
})

app.listen(8000, () => {
   console.log("express started on 8000!");
})