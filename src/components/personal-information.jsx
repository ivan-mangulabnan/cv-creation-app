import { Heading, PInfoContact } from "./utils.jsx"

export function PersonalInformation ({formData, setFormData, editing, updateEditing}) {

  const title = 'Personal Information';
  const sections = [
    { id: 'fullname', label: 'FULLNAME', value: formData.personalInfo.fullname },
    { id: 'occupation', label: 'OCCUPATION', value: formData.personalInfo.occupation },
  ];
  const contacts = [
    { id: 'address', label: 'ADDRESS', value: formData.personalInfo.contact?.address || '' },
    { id: 'phoneNum', label: 'PHONE NUMBER', value: formData.personalInfo.contact?.phoneNum || '' },
    { id: 'email', label: 'EMAIL', value: formData.personalInfo.contact?.email || '' },
  ];
  const isPersonalInfoHasValue = formData.personalInfo.fullname ||formData.personalInfo.occupation || formData.personalInfo.contact.address || formData.personalInfo.contact.phoneNum || formData.personalInfo.contact.email;
  if (!editing) {
    return (
      <div>
        <div className="flex flex-space-between bg-white padding-x1-y05 bor-rad-1">
          <Heading title={title}/>
          <button className="edit-btn" type='button' onClick={updateEditing}>
            <svg className="edit-btn-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </button>
        </div>
        { isPersonalInfoHasValue && 
          <div className="padding-left-1 margin-top-1 bg-white pad-xy-1 bor-rad-1">
            <div>
              <p className="fn-display">{formData.personalInfo.fullname}</p>
              <p className="occ-display">{formData.personalInfo.occupation}</p>
            </div>
            <div className="margin-top-1">
              { Object.entries(formData.personalInfo.contact ?? {}).map(([key, value]) => {
                return value && <PInfoContact key={key} type={key} value={value}/>
              }) }
            </div>
          </div>
        }
      </div>
    )
  }

  return (
    <div>
      <div className="bg-white padding-x1-y05 bor-rad-1">
        <Heading title={title}/>
      </div>
      <div className="pad-xy-1 margin-top-1 bg-white bor-rad-1">
        { sections.map(section => <Sections key={section.id} id={section.id} label={section.label} value={section.value ? section.value : ''} setFormData={setFormData}/>)}
        { contacts.map(contact => <Contacts key={contact.id} id={contact.id} label={contact.label} value={contact.value ? contact.value : ''} setFormData={setFormData}/>)}
        <div className="margin-top-1">
          <button className="display-block margin-left-auto check-btn" type='button' onClick={updateEditing}>
            <svg className="check-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function Sections ({id, label, value, setFormData}) {
  const updateValue = (newValue) => {
    setFormData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, [id]: newValue}}))
  }

  return (
    <div className="flex flex-dir-col">
      <label className="p-label" htmlFor={id}>{label}</label>
      <input className="p-input" id={id} type="text" value={value} onChange={(e) => updateValue(e.target.value)} />
    </div>
  )
}

function Contacts ({id, label, value, setFormData}) {
  const updateValue = (newValue) => {
    setFormData(prev => {
      return { ...prev, personalInfo: { ...prev.personalInfo, contact: { ...prev.personalInfo.contact, [id]: newValue}}};
    })
  }

  return (
    <div className="flex flex-dir-col">
      <label className="p-label" htmlFor={id}>{label}</label>
      <input className="p-input" id={id} type="text" value={value} onChange={(e) => updateValue(e.target.value)} />
    </div>
  )
}