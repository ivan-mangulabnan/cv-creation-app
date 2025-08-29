import { Heading, LabelInput } from "./utils.jsx"

export function Education ({formData, setFormData}) {
  const title = 'Education';
  
  const addStudies = () => {
    const id = crypto.randomUUID();

    setFormData(prev => {
      return {...prev, education: {...prev.education, studies: [...(prev.education.studies ?? []), {id, fos: '', univ: '', dateFrom: '', dateTo: ''}] }}
    })
  }

  const updateForm = (mainID, field, newValue) => {
    setFormData(prev => {
      return {...prev, education: { ...prev.education, studies: prev.education.studies.map(study => {
        return study.id === mainID ? {...study, [field]: newValue } : study;
      })}}
    })
  }
  
  return (
    <div>
      <Heading title={title}/>
      <div>
        { (formData.education.studies ?? []).map(study => {
          return <StudySection key={study.id} study={study} updateForm={updateForm}/>
        }) }
      </div>
      <button type="button" onClick={addStudies}>Add Education</button> 
    </div>
  )
}

function StudySection ({study, updateForm}) {
  const categories = [
    { id: 'fos', label: 'Field of Study' },
    { id: 'univ', label: 'University' },
    { id: 'dateFrom', label: 'From' },
    { id: 'dateTo', label: 'To' },
  ];

  const curry = (mainID, field) => {
    return (e) => {
      updateForm(mainID, field, e);
    }
  }

  return (
    <div>
      { categories.map(category => <LabelInput key={category.id} id={category.id} label={category.label} value={study[category.id] ?? ''} onChange={curry(study.id, category.id)}/>) }
    </div>
  )
}