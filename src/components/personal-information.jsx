import { CheckBTN, EditBTN, Heading, PInfoContact } from "./utils.jsx"

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
  const isPersonalInfoHasValue = formData.personalInfo.fullname ||formData.personalInfo.occupation || (formData.personalInfo.contact?.address || '') || (formData.personalInfo.contact?.phoneNum || '') || (formData.personalInfo.contact?.email || '');
  if (!editing) {
    return (
      <div>
        <div className="flex flex-space-between bg-white padding-x1-y05 bor-rad-1">
          <Heading title={title}/>
          <EditBTN onClick={updateEditing}/>
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
          <CheckBTN onClick={updateEditing}/>
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