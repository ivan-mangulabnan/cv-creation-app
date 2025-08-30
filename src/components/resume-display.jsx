import '../styles/resume-display.css';
import { AddressSVG, PhoneSVG, EmailSVG } from './utils.jsx';

export function ResumeDisplay ({formData}) {
  return (
    <div className="resume-display">
      <div className='sheet'>
        <PersonalInfo personalInfo={formData.personalInfo}/>
      </div>
    </div>
  )
}

function PersonalInfo ({personalInfo}) {
  const svgs = {
    address: AddressSVG,
    phoneNum: PhoneSVG,
    email: EmailSVG
  }

  return (
    <div>
      <h1>{personalInfo.fullname}</h1>
      <p>{personalInfo.occupation}</p>
      <div className='contact-list'>
        { Object.entries(personalInfo.contact ?? {}).map(([key, value]) => {
          const Icon = svgs[key];
          return (
            <div key={key} className='flex gap-point-5'>
              { value !== '' && <Icon /> }
              <span>{value}</span>
            </div>
          )
        }) }
      </div>
    </div>
  )
}