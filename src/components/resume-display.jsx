import '../styles/resume-display.css';
import { AddressSVG, PhoneSVG, EmailSVG } from './utils.jsx';

export function ResumeDisplay ({formData}) {
  return (
    <div className="resume-display">
      <div className='sheet'>
        {/* <PersonalInformationSection formData={formData}/> */}
      </div>
    </div>
  )
}

const PersonalInformationSection = ({formData}) => {
  const sections = [
    { wrapperClass: 'address-section', value: formData.address, svg: AddressSVG, svgClass: 'address-svg' },
    { wrapperClass: 'phone-section', value: formData['phone-number'], svg: PhoneSVG, svgClass: 'phone-svg' },
    { wrapperClass: 'email-section', value: formData.email, svg: EmailSVG, svgClass: 'email-svg' }
  ];

  return (
    <section>
      <h1>{formData.fullname}</h1>
      <p>{formData.occupation}</p>
      <div className='contacts-div'>
        { sections
          .filter(section => section.value?.trim())
          .map(section => <ContactSection key={section.wrapperClass} wrapperClass={section.wrapperClass} value={section.value} Svg={section.svg} svgClass={section.svgClass}/>)
        }
      </div>
    </section>
  )
}

function ContactSection ({wrapperClass, value, Svg, svgClass}) {
  return (
    <div className={`${wrapperClass}`}>
      <Svg classname={svgClass}/>
      <p>{value}</p>
    </div>
  )
}