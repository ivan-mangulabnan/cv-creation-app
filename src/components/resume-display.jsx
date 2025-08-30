import '../styles/resume-display.css';
import { AddressSVG, PhoneSVG, EmailSVG } from './utils.jsx';

export function ResumeDisplay ({formData}) {
  return (
    <div className="resume-display">
      <div className='sheet'>
        <PersonalInfo personalInfo={formData.personalInfo}/>
        <Educ education={formData.education}/>
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

function Educ ({education}) {
  return (
    <div className='margin-top-2'>
      { education.studies?.length > 0 && (
        <div>
          <h2>EDUCATION</h2>
          <hr className='bg-color-black' />
          <div>
            { education.studies.map(study => {
              return (
                <div key={study.id} className='margin-top-1 flex flex-space-between flex-align-center'>
                  <div>
                    <h3>
                      {study.univ ? `${study.fos},` : study.fos}
                      <span className={`span-univ ${study.dateFrom || study.dateTo ? 'display-block' : ''}`}><i>{` ${study.univ}`}</i></span>
                    </h3>
                  </div>
                  <div>
                    <p className='educ-dates'>
                      <span>{study.dateTo ? `${study.dateFrom} - ` : study.dateFrom}</span>
                      <span>{study.dateTo}</span>
                    </p>
                  </div>
                </div>
              )
            }) }
          </div>
        </div>
      )}
    </div>
  )
}