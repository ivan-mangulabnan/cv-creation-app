import '../styles/main-contents.css';
import { ResumeForms } from './resume-forms.jsx';
import { ResumeDisplay } from './resume-display.jsx';
import { useState } from 'react';

export function MainContent () {
  const [formData, setFormData] = useState({personalInfo: {}, education: {}, skills: {}, experience: {}, projects: {}});

  return (
    <div className="main-content">
      <ResumeForms formData={formData} setFormData={setFormData}/>
      <ResumeDisplay formData={formData}/>
    </div>
  )
}