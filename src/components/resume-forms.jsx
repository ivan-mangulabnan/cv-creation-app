import '../styles/resume-forms.css';
import { PersonalInformation } from './personal-information.jsx';

export function ResumeForms ({ formData, onChange }) {
  return (
    <div className="resume-forms">
      <PersonalInformation formData={formData} onChange={onChange}/>
    </div>
  )
}