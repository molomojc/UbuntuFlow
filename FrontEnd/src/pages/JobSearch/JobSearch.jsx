import React, { useState } from 'react';
import './JobSearch.css';

const JobSearchPage = () => {
  // State for personal details
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
    <div className="max-w-6xl mx-auto p-6 bg-pink-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Job Application</h1>
      <form onSubmit={handleSubmit} className="space-y-10">

     
        {/* Education Section */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-pink-800 border-b pb-2 mb-4">Educational Background</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded">
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(edu).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <label htmlFor={`${key}-${index}`} className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      id={`${key}-${index}`}
                      name={key}
                      type={key.includes('Year') ? 'number' : 'text'}
                      value={value}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="mt-1 border-2 border-gray-200 rounded px-3 py-2 focus:border-pink-500 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-2 mt-3">
                {education.length > 1 && (
                  <button type="button" onClick={() => removeEducation(index)} className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-800">Remove</button>
                )}
                {index === education.length - 1 && (
                  <button type="button" onClick={addEducation} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700">Add Education</button>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Work Experience Section */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-pink-800 border-b pb-2 mb-4">Work Experience</h2>
          {workExperience.map((work, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded">
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(work).map(([key, value]) => (
                  <div key={key} className="flex flex-col col-span-2 md:col-span-1">
                    <label htmlFor={`${key}-${index}`} className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                    {key === 'responsibilities' || key === 'achievements' ? (
                      <textarea
                        id={`${key}-${index}`}
                        name={key}
                        rows="3"
                        value={value}
                        onChange={(e) => handleWorkExperienceChange(index, e)}
                        className="mt-1 border-2 border-gray-200 rounded px-3 py-2 focus:border-pink-500 focus:outline-none"
                      ></textarea>
                    ) : (
                      <input
                        id={`${key}-${index}`}
                        name={key}
                        type={key.includes('Date') ? 'month' : 'text'}
                        value={value}
                        onChange={(e) => handleWorkExperienceChange(index, e)}
                        className="mt-1 border-2 border-gray-200 rounded px-3 py-2 focus:border-pink-500 focus:outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-2 mt-3">
                {workExperience.length > 1 && (
                  <button type="button" onClick={() => removeWorkExperience(index)} className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-800">Remove</button>
                )}
                {index === workExperience.length - 1 && (
                  <button type="button" onClick={addWorkExperience} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700">Add Experience</button>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Certificates Upload */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-pink-800 border-b pb-2 mb-4">Certificates</h2>
          <input type="file" multiple onChange={handleCertificateChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded file:bg-pink-600 file:text-white hover:file:bg-pink-800" />
          {certificates.length > 0 && (
            <ul className="mt-3 space-y-2">
              {certificates.map((file, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
                  {file.name}
                  <button onClick={() => removeCertificate(index)} className="text-red-600 hover:text-red-800">Remove</button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* CV Upload */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-pink-800 border-b pb-2 mb-4">CV/Resume</h2>
          <input type="file" onChange={handleCvChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded file:bg-pink-600 file:text-white hover:file:bg-pink-800" />
          {cv && (
            <div className="mt-3 bg-gray-100 px-4 py-2 rounded flex justify-between items-center">
              {cv.name}
              <button onClick={removeCv} className="text-red-600 hover:text-red-800">Remove</button>
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-pink-800 border-b pb-2 mb-4">Skills</h2>
          <div className="flex flex-col md:flex-row gap-3 mb-3">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter a skill"
              className="flex-1 border-2 border-gray-200 rounded px-3 py-2 focus:border-pink-500 focus:outline-none"
            />
            <button type="button" onClick={handleAddSkill} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700">Add Skill</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-pink-100 text-pink-800 px-4 py-1 rounded-full flex items-center">
                {skill}
                <button onClick={() => handleRemoveSkill(index)} className="ml-2 text-red-600 hover:text-red-800">&times;</button>
              </span>
            ))}
          </div>
        </section>

       
        <div className="text-center">
          <button type="submit" className="bg-pink-600 text-white text-lg font-medium px-6 py-3 rounded hover:bg-pink-800">Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default JobSearchPage;