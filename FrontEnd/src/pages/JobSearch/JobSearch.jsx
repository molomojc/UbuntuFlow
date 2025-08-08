import React, { useState } from 'react';
import './JobSearch.css';

const JobSearchPage = () => {
  // State for personal details
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  // State for education
  const [education, setEducation] = useState([
    {
      institution: '',
      degree: '',
      fieldOfStudy: '',
      graduationYear: '',
      gpa: ''
    }
  ]);

  // State for work experience
  const [workExperience, setWorkExperience] = useState([
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      responsibilities: '',
      achievements: ''
    }
  ]);
  // New state for certificates, CV, and skills
  const [certificates, setCertificates] = useState([]);
  const [cv, setCv] = useState(null);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  // Handle personal details change
  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value
    });
  };

  // Handle education change
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value
    };
    setEducation(updatedEducation);
  };

  // Handle work experience change
  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index] = {
      ...updatedWorkExperience[index],
      [name]: value
    };
    setWorkExperience(updatedWorkExperience);
  };

  // Add new education entry
  const addEducation = () => {
    setEducation([
      ...education,
      {
        institution: '',
        degree: '',
        fieldOfStudy: '',
        graduationYear: '',
        gpa: ''
      }
    ]);
  };

  // Add new work experience entry
  const addWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
        achievements: ''
      }
    ]);
  };

  // Remove education entry
  const removeEducation = (index) => {
    if (education.length > 1) {
      const updatedEducation = [...education];
      updatedEducation.splice(index, 1);
      setEducation(updatedEducation);
    }
  };

  // Remove work experience entry
  const removeWorkExperience = (index) => {
    if (workExperience.length > 1) {
      const updatedWorkExperience = [...workExperience];
      updatedWorkExperience.splice(index, 1);
      setWorkExperience(updatedWorkExperience);
    }
  };
  // New handlers for certificates, CV, and skills
  const handleCertificateChange = (e) => {
    const files = Array.from(e.target.files);
    setCertificates([...certificates, ...files]);
  };
  const handleCvChange = (e) => {
    setCv(e.target.files[0]);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddSkill();
    }
  };

  const removeCertificate = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
  };

  const removeCv = () => {
    setCv(null);
  };

  // Handle form submission
 const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Personal Details:', personalDetails);
    console.log('Education:', education);
    console.log('Work Experience:', workExperience);
    console.log('Certificates:', certificates);
    console.log('CV:', cv);
    console.log('Skills:', skills);
    alert('Application submitted successfully!');
  };

  return (
    <div className="job-application-container">
      <h1>Job Application</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Details Section */}
        <div className="form-section">
          <h2>Personal Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={personalDetails.firstName}
                onChange={handlePersonalDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={personalDetails.lastName}
                onChange={handlePersonalDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={personalDetails.email}
                onChange={handlePersonalDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={personalDetails.phone}
                onChange={handlePersonalDetailsChange}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={personalDetails.address}
                onChange={handlePersonalDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={personalDetails.city}
                onChange={handlePersonalDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State/Province</label>
              <input
                type="text"
                id="state"
                name="state"
                value={personalDetails.state}
                onChange={handlePersonalDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip/Postal Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={personalDetails.zipCode}
                onChange={handlePersonalDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={personalDetails.country}
                onChange={handlePersonalDetailsChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="form-section">
          <h2>Educational Background</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-entry">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor={`institution-${index}`}>Institution</label>
                  <input
                    type="text"
                    id={`institution-${index}`}
                    name="institution"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(index, e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`degree-${index}`}>Degree</label>
                  <input
                    type="text"
                    id={`degree-${index}`}
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`fieldOfStudy-${index}`}>Field of Study</label>
                  <input
                    type="text"
                    id={`fieldOfStudy-${index}`}
                    name="fieldOfStudy"
                    value={edu.fieldOfStudy}
                    onChange={(e) => handleEducationChange(index, e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`graduationYear-${index}`}>Graduation Year</label>
                  <input
                    type="number"
                    id={`graduationYear-${index}`}
                    name="graduationYear"
                    value={edu.graduationYear}
                    onChange={(e) => handleEducationChange(index, e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`gpa-${index}`}>GPA (optional)</label>
                  <input
                    type="number"
                    id={`gpa-${index}`}
                    name="gpa"
                    step="0.01"
                    min="0"
                    max="4"
                    value={edu.gpa}
                    onChange={(e) => handleEducationChange(index, e)}
                  />
                </div>
              </div>
              <div className="entry-actions">
                {education.length > 1 && (
                  <button type="button" onClick={() => removeEducation(index)} className="remove-button">
                    Remove
                  </button>
                )}
                {index === education.length - 1 && (
                  <button type="button" onClick={addEducation} className="add-button">
                    Add Education
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Work Experience Section */}
        <div className="form-section">
          <h2>Work Experience</h2>
          {workExperience.map((work, index) => (
            <div key={index} className="work-entry">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor={`company-${index}`}>Company</label>
                  <input
                    type="text"
                    id={`company-${index}`}
                    name="company"
                    value={work.company}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`position-${index}`}>Position</label>
                  <input
                    type="text"
                    id={`position-${index}`}
                    name="position"
                    value={work.position}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`startDate-${index}`}>Start Date</label>
                  <input
                    type="month"
                    id={`startDate-${index}`}
                    name="startDate"
                    value={work.startDate}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`endDate-${index}`}>End Date</label>
                  <input
                    type="month"
                    id={`endDate-${index}`}
                    name="endDate"
                    value={work.endDate}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor={`responsibilities-${index}`}>Responsibilities</label>
                  <textarea
                    id={`responsibilities-${index}`}
                    name="responsibilities"
                    value={work.responsibilities}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="form-group full-width">
                  <label htmlFor={`achievements-${index}`}>Achievements (optional)</label>
                  <textarea
                    id={`achievements-${index}`}
                    name="achievements"
                    value={work.achievements}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="entry-actions">
                {workExperience.length > 1 && (
                  <button type="button" onClick={() => removeWorkExperience(index)} className="remove-button">
                    Remove
                  </button>
                )}
                {index === workExperience.length - 1 && (
                  <button type="button" onClick={addWorkExperience} className="add-button">
                    Add Work Experience
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* New Certificates Section */}
        <div className="form-section">
          <h2>Certificates</h2>
          <div className="file-upload-container">
            <div className="file-input-wrapper">
              <input
                type="file"
                id="certificates"
                multiple
                onChange={handleCertificateChange}
                className="file-input"
              />
              <label htmlFor="certificates" className="file-input-label">
                Choose Certificates
              </label>
            </div>
            <p className="file-upload-info">You can select multiple files</p>
            
            {certificates.length > 0 && (
              <div className="file-list">
                <h3>Selected Certificates:</h3>
                <ul>
                  {certificates.map((file, index) => (
                    <li key={index} className="file-item">
                      <span className="file-name">{file.name}</span>
                      <button 
                        type="button" 
                        className="remove-file-button"
                        onClick={() => removeCertificate(index)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ==========Section for uploading CV============= */}
        <div className="form-section">
          <h2>CV/Resume</h2>
          <div className="file-upload-container">
            <div className="file-input-wrapper">
              <input
                type="file"
                id="cv"
                onChange={handleCvChange}
                className="file-input"
              />
              <label htmlFor="cv" className="file-input-label">Choose CV/Resume
              </label>
            </div>
            <p className="file-upload-info">PDF, DOC, or DOCX format (Max 5MB)</p>
            
            {cv && (
              <div className="file-list">
                <h3>Selected CV:</h3>
                <ul>
                  <li className="file-item">
                    <span className="file-name">{cv.name}</span>
                    <button 
                      type="button" 
                      className="remove-file-button"
                      onClick={removeCv}
                    >
                      Remove
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* New Additional Skills Section */}
        <div className="form-section">
          <h2>Additional Skills</h2>
          <div className="skills-container">
            <div className="skill-input-container">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a skill"
                className="skill-input"
              />
              <button 
                type="button" 
                onClick={handleAddSkill}
                className="add-skill-button"
              >
                Add Skill
              </button>
            </div>
            <p className="skill-input-info">Press Enter or click Add Skill to add to your list</p>
            
            {skills.length > 0 && (
              <div className="skills-list">
                <h3>Your Skills:</h3>
                <div className="skills-tags">{skills.map((skill, index) => (
                    <div key={index} className="skill-tag">
                      {skill}
                      <button 
                        type="button" 
                        className="remove-skill-button"
                        onClick={() => handleRemoveSkill(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="submit-section">
          <button type="submit" className="submit-button">Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default JobSearchPage;