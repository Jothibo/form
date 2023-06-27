import React, { useState } from 'react';

const FileUploadForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState('');
  const [taxtArea, setTaxtArea] = useState('');  
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the form data to send to the server
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('gender', gender);
    formData.append('skills', skills.join(','));
    formData.append('experience', experience);
    formData.append('taxtArea', taxtArea);  
    formData.append('file', file);

    // Reset the form fields
    setName('');
    setEmail('');
    setGender('');
    setSkills([]);
    setExperience('');
    setTaxtArea('');  
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="gender" value="male" onChange={(e) => setGender(e.target.value)} /> Male
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="gender" value="female" onChange={(e) => setGender(e.target.value)} /> Female
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="gender" value="others" onChange={(e) => setGender(e.target.value)} /> Others
        </div>
      </div>
      <div className="form-group">
        <label>Skills:</label>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" value="HTML" onChange={(e) => setSkills((prevSkills) => [...prevSkills, e.target.value])} /> HTML
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" value="CSS" onChange={(e) => setSkills((prevSkills) => [...prevSkills, e.target.value])} /> CSS
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" value="JavaScript" onChange={(e) => setSkills((prevSkills) => [...prevSkills, e.target.value])} /> JavaScript
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" value="Bootstrap" onChange={(e) => setSkills((prevSkills) => [...prevSkills, e.target.value])} /> Bootstrap
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="experience">Experience:</label>
        <select className="form-control" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)}>
          <option value="">Select</option>
          <option value="freshers">Freshers</option>
          <option value="experienced">Experienced</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="taxtArea">Text Area:</label>  
        <textarea className="form-control" id="taxtArea" value={taxtArea} onChange={(e) => setTaxtArea(e.target.value)} />  
      </div>
      <div className="form-group">
        <label htmlFor="file">Upload File:</label>
        <input type="file" className="form-control-file" id="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default FileUploadForm;
