export const AddressSVG = (classname = "") => {
  return (
    <svg className={`icon-svg ${classname}`}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
    </svg>
  )
}

export const PhoneSVG = (classname = "") => {
  return (
    <svg className={`icon-svg ${classname}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
  )
}

export const EmailSVG = (classname = "") => {
  return (
    <svg className={`icon-svg ${classname}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  )
}

export function Heading ({title}) {
  return <div>
    <h2>{title}</h2>
  </div>
}

export function LabelInput ({id, inputType, label, value, onChange}) {
  let inputEle;

  switch (inputType) {
    case 'textarea' :
      inputEle = <textarea id={id} value={value} onChange={(e) =>  onChange(e.target.value)}></textarea>
      break;
    default:
      inputEle = <input id={id} type={inputType ?? 'text'} value={value} onChange={(e) => onChange(e.target.value)}/>
      break;
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      { inputEle }
    </div>
  )
}