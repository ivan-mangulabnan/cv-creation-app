import '../styles/resume-forms.css';
import { PersonalInformation } from './personal-information.jsx';
import { Education } from './educ.jsx';
import { Skills } from './skills.jsx';
import { Experience } from './exp.jsx';
import { Projects } from './projects.jsx';
import { useState } from 'react';

export function ResumeForms ({ formData, setFormData }) {
  const [openID, setOpenID] = useState(null);

  const toggleEditing = (id) => {
    setOpenID(prev => prev === id ? null : id );
  }

  return (
    <div className="resume-forms">
      <PersonalInformation formData={formData} setFormData={setFormData} editing={openID === 'personalInfo'} updateEditing={() => toggleEditing('personalInfo')}/>
      <Education formData={formData} setFormData={setFormData} editing={openID === 'education'} updateEditing={() => toggleEditing('education')}/>
      <Skills formData={formData} setFormData={setFormData} editing={openID === 'skills'} updateEditing={() => toggleEditing('skills')}/>
      <Experience formData={formData} setFormData={setFormData} editing={openID === 'experience'} updateEditing={() => toggleEditing('experience')}/>
      <Projects formData={formData} setFormData={setFormData} editing={openID === 'projects'} updateEditing={() => toggleEditing('projects')}/>
    </div>
  )
}