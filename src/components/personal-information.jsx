import { Heading } from "./utils.jsx"

export function PersonalInformation ({formData, setFormData}) {
  const title = 'Personal Information';
  const sections = [
    { id: 'fullname', label: 'Fullname', value: formData.personalInfo.fullname },
    { id: 'occupation', label: 'Occupation', value: formData.personalInfo.occupation },
  ];
  const contacts = [
    { id: 'address', label: 'Address', value: formData.personalInfo.contact?.address || '' },
    { id: 'phoneNum', label: 'Phone Number', value: formData.personalInfo.contact?.phoneNum || '' },
    { id: 'email', label: 'Email', value: formData.personalInfo.contact?.email || '' },
  ];

  console.log(formData.personalInfo);
  return (
    <div>
      <Heading title={title}/>
      <div>
        { sections.map(section => <Sections key={section.id} id={section.id} label={section.label} value={section.value ? section.value : ''} setFormData={setFormData}/>)}
        { contacts.map(contact => <Contacts key={contact.id} id={contact.id} label={contact.label} value={contact.value ? contact.value : ''} setFormData={setFormData}/>)}
      </div>
    </div>
  )
}

function Sections ({id, label, value, setFormData}) {
  const updateValue = (newValue) => {
    setFormData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, [id]: newValue}}))
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" value={value} onChange={(e) => updateValue(e.target.value)} />
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
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" value={value} onChange={(e) => updateValue(e.target.value)} />
    </div>
  )
}