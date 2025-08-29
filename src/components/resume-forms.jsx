import '../styles/resume-forms.css';
import { PersonalInformation } from './personal-information.jsx';

export function ResumeForms ({ formData, setFormData }) {
  return (
    <div className="resume-forms">
      <PersonalInformation formData={formData} setFormData={setFormData}/>
      {/* <Education />
      <Skills />
      <Experience />
      <Projects /> */}
    </div>
  )
}