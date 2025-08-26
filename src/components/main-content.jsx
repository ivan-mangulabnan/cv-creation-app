import '../styles/main-contents.css';
import { ResumeForms } from './resume-forms.jsx';
import { ResumeDisplay } from './resume-display.jsx';
import { useState } from 'react';

export function MainContent () {
  const [formData, setFormData] = useState({});

  function handleChange (fieldName, value) {
    setFormData(prev => ({...prev, [fieldName]: value}));
  }

  return (
    <div className="main-content">
      <ResumeForms formData={formData} onChange={handleChange}/>
      <ResumeDisplay formData={formData}/>
    </div>
  )
}