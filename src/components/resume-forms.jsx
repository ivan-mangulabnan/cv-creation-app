import '../styles/resume-forms.css';
import { PersonalInformation } from './personal-information.jsx';
import { Education } from './educ.jsx';

export function ResumeForms ({ formData, setFormData }) {
  return (
    <div className="resume-forms">
      <PersonalInformation formData={formData} setFormData={setFormData}/>
      <Education formData={formData} setFormData={setFormData}/>
      {/* <Skills />
      <Experience />
      <Projects /> */}
    </div>
  )
}