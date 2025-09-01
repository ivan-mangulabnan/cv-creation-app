import { useState } from "react";
import { CheckBTN, DelBTN, EditBTN, Heading, LabelInput, ShowBtnSVG } from "./utils.jsx";

export function Experience ({formData, setFormData, editing, updateEditing}) {
  const [isOpen, setIsOpen] = useState(null);
  const updateIsOpen = (id) => {
    setIsOpen(prev => prev === id ? null : id);
  }
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
  const isNotEmpty = formData.experience.length > 0;
  return (
    <div className="margin-top-1">
      <div className="flex flex-space-between bg-white padding-x1-y05 bor-rad-1">
        <Heading title={title}/>
        <button className="edit-btn show-btn" type='button' onClick={updateEditing}>
          <ShowBtnSVG isShowing={editing}/>
        </button>
      </div>
      { editing && (
        <>
          <div className={ isNotEmpty && "margin-top-1 pad-xy-1 bg-white bor-rad-1"}>
            { formData.experience.map(exp => <ExpSection key={exp.id} exp={exp} updateExp={updateExp} deleteExp={deleteExp} isOpen={isOpen === exp.id} updateIsOpen={updateIsOpen}/>) }
          </div>
          <div className="margin-top-1">
            <button className="add-comp-btn" type="button" onClick={addExp}>Add Experience</button>
          </div>
        </>
      )}
    </div>
  )
}

function ExpSection ({exp, updateExp, deleteExp, isOpen, updateIsOpen}) {
  const categories = [
    { id: 'position', label: 'POSITION', value: exp.position },
    { id: 'company', label: 'COMPANY', value: exp.company },
    { id: 'dateFrom', label: 'FROM', value: exp.dateFrom },
    { id: 'dateTo', label: 'TO', value: exp.dateTo },
    { id: 'desc', label: 'DESCRIPTION', value: exp.desc, inputType: 'textarea' }
  ];

  const curry = (id, field) => {
    return (newValue) => {
      updateExp(id, field, newValue);
    }
  }

  if (isOpen) {
    return (
      <div className="pad-xy-1 border-2px-grey bor-rad-1 margin-top-1">
        { categories.map(category => <LabelInput key={category.id} id={`${category.id}-${exp.id}`} inputType={category.inputType ? category.inputType : null} label={category.label} value={category.value ? category.value : ''} onChange={curry(exp.id, category.id)}/>) }
        <div className="margin-top-1 flex flex-end">
          <DelBTN onClick={() => deleteExp(exp.id)} />
          <CheckBTN onClick={() => updateIsOpen(exp.id)} addClass="margin-0"/>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-space-between margin-top-1 pad-xy-1 bg-slight-purple bor-rad-1">
      <h4>{exp.position ? exp.position : 'Set Position'}</h4>
      <div className="flex">
        <EditBTN onClick={() => updateIsOpen(exp.id)}/>
        <DelBTN onClick={() => deleteExp(exp.id)} />
      </div>
    </div>
  )
}