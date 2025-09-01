import { useState } from "react";
import { CheckBTN, DelBTN, EditBTN, Heading, LabelInput, ShowBtnSVG } from "./utils.jsx"

export function Education ({formData, setFormData, editing, updateEditing}) {
  const [isOpen, setIsOpen] = useState(null);
  const updateIsOpen = (id) => {
    setIsOpen(prev => prev === id ? null : id );
  }
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

  const deleteStudy = (id) => {
    setFormData(prev => {
      return {...prev, education: { ...prev.education, studies: prev.education.studies.filter(study => study.id !== id)}}
    })
  }
  const isStudiesEmpty = (formData.education.studies ?? []).length === 0;
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
          <div className={isStudiesEmpty ? '' : `margin-top-1 pad-xy-1 bg-white bor-rad-1`}>
            { (formData.education.studies ?? []).map(study => {
              return <StudySection key={study.id} study={study} updateForm={updateForm} deleteStudy={deleteStudy} isOpen={isOpen === study.id} setIsOpen={() => updateIsOpen(study.id)}/>
            }) }
          </div>
          <div className="margin-top-1">
            <button className="add-comp-btn" type="button" onClick={addStudies}>Add Education</button>
          </div>
        </>
      ) }
    </div>
  )
}

function StudySection ({study, updateForm, deleteStudy, isOpen, setIsOpen}) {
  const categories = [
    { id: 'fos', label: 'FIELD OF STUDY' },
    { id: 'univ', label: 'UNIVERSITY' },
    { id: 'dateFrom', label: 'FROM' },
    { id: 'dateTo', label: 'TO' },
  ];

  const curry = (mainID, field) => {
    return (e) => {
      updateForm(mainID, field, e);
    }
  }

  if (isOpen) {
    return (
      <div className="margin-top-1 pad-xy-1 border-2px-grey bor-rad-1">
        { categories.map(category => <LabelInput key={category.id} id={`${category.id}-${study.id}`} label={category.label} value={study[category.id] ?? ''} onChange={curry(study.id, category.id)}/>) }
        <div className="flex flex-end margin-top-1">
          <DelBTN onClick={() => deleteStudy(study.id)}/>
          <CheckBTN addClass="margin-0" onClick={setIsOpen}/>
        </div>
      </div>
    )
  }
  
  return (
    <div className="flex flex-space-between bg-slight-purple pad-xy-1 margin-top-1 bor-rad-1">
      <h4>{study.fos ? study.fos : 'Set Study'}</h4>
      <EditBTN onClick={setIsOpen}/>
    </div>
  )
}