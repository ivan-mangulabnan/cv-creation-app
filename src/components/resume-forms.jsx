import '../styles/resume-forms.css';
import { PersonalInformation } from './personal-information.jsx';
import { Education } from './educ.jsx';
import { Skills } from './skills.jsx';
import { Experience } from './exp.jsx';
import { Projects } from './projects.jsx';

export function ResumeForms ({ formData, setFormData }) {
  return (
    <div className="resume-forms">
      <PersonalInformation formData={formData} setFormData={setFormData}/>
      <Education formData={formData} setFormData={setFormData}/>
      <Skills formData={formData} setFormData={setFormData}/>
      <Experience formData={formData} setFormData={setFormData}/>
      <Projects formData={formData} setFormData={setFormData}/>
    </div>
  )
}