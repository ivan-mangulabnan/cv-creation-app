import '../styles/resume-display.css';
import { AddressSVG, PhoneSVG, EmailSVG } from './utils.jsx';

export function ResumeDisplay ({formData}) {
  return (
    <div className="resume-display">
      <div className='sheet'>
        <PersonalInfo personalInfo={formData.personalInfo}/>
        <Educ education={formData.education}/>
        <Skills skills={formData.skills}/>
        <Experience experience={formData.experience} />
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
          <hr />
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

function Skills ({skills}) {
  return (
    <div>
      { skills.length > 0 && (
        <div>
          <h2>SKILLS</h2>
          <hr />
          <ul className='skill-ul margin-top-2 grid grid-column-2'>
            { skills.map(skill => <li className='padding-left-1' key={skill.id}>{skill.value}</li>) }
          </ul>
        </div>
      ) }
    </div>
  )
}

function Experience ({experience}) {
  return (
    <div>
      { experience.length > 0 &&  (
        <div>
          <div>
            <h2>EXPERIENCE</h2>
            <hr />
          </div>
          <ul>
            { experience.map(exp => {
              return (
                <li key={exp.id} className='flex flex-space-between'>
                  <div>
                    <h3>
                      {exp.company ? `${exp.position},` : exp.position}
                      <span className={`span-company ${(exp.dateFrom || exp.dateTo) && 'display-block'}`}><i>{exp.company}</i></span>
                    </h3>
                    <p className='pre-line word-limit-60ch'>{exp.desc}</p>
                  </div>
                  <div>
                    <p className='exp-dates'>
                      <span>{exp.dateFrom}</span>
                      <span>{exp.dateTo && ' - '}</span>
                      <span>{exp.dateTo}</span>
                    </p>
                  </div>
                </li>
              )
            }) }
          </ul>
        </div>
      )}
    </div>
  )
}