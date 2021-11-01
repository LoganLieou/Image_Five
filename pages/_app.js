import { useState } from 'react';

import '../styles/globals.css'

function App() {

  // file content
  const [formData, setFormData] = useState();

  const handleChange = (event) => {
      // prevent default behavior
      event.preventDefault();

      // file
      let file = event.target.files[0];

      // create the form data to be sent
      const tempFormData = new FormData();
      tempFormData.append("myFile", file);

      // set form data
      setFormData(tempFormData);
  };

  // submit form
  const submit = async () => {
   // send form data when clicked
   var xhr = new XMLHttpRequest();
   xhr.open("POST", "http://localhost:8000", true);
   xhr.send(formData);
  };

  return (
    <center style={{"marginTop": "10%"}}>
         <h1>Image Five</h1>
         <hr style={{"width": "20%"}}/>
         <input type="file" onChange={handleChange}/>
         <br/>
         <br/>
         <button onClick={submit} style={{"marginRight": "9.12%"}}>Submit</button>
    </center>
  );
}

export default App;
