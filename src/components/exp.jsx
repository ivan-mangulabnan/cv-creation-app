import { Heading, LabelInput } from "./utils.jsx";

export function Experience ({formData, setFormData}) {
  const title = 'Professional Experience';
  const addExp = () => {
    const id = crypto.randomUUID();
    setFormData(prev => {
      return {...prev, experience: [...prev.experience, {id, position: '', company: '', dateFrom: '', dateTo: '', desc: ''}]}
    })
  }
  const deleteExp = (id) => {
    setFormData(prev => ({...prev, experience: prev.experience.filter(exp => exp.id !== id)}));
  }
  const updateExp = (id, field, newValue) => {
    setFormData(prev => {
      return {...prev, experience: prev.experience.map(exp => {
        return exp.id === id ? {...exp, [field]: newValue } : exp
      })}
    })
  }

  return (
    <div>
      <Heading title={title}/>
      <div>
        { formData.experience.map(exp => <ExpSection key={exp.id} exp={exp} updateExp={updateExp} deleteExp={deleteExp}/>) }
      </div>
      <button type="button" onClick={addExp}>Add Experience</button>
    </div>
  )
}

function ExpSection ({exp, updateExp, deleteExp}) {
  const categories = [
    { id: 'position', label: 'Position', value: exp.position },
    { id: 'company', label: 'Company', value: exp.company },
    { id: 'dateFrom', label: 'From', value: exp.dateFrom },
    { id: 'dateTo', label: 'To', value: exp.dateTo },
    { id: 'desc', label: 'Description', value: exp.desc, inputType: 'textarea' }
  ];

  const curry = (id, field) => {
    return (newValue) => {
      updateExp(id, field, newValue);
    }
  }

  return (
    <div>
      { categories.map(category => <LabelInput key={category.id} id={`${category.id}-${exp.id}`} inputType={category.inputType ? category.inputType : null} label={category.label} value={category.value ? category.value : ''} onChange={curry(exp.id, category.id)}/>) }
      <button type="button" onClick={() => deleteExp(exp.id)}>Remove Experience</button>
    </div>
  )
}