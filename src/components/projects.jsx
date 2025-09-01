import { useState } from "react";
import { CheckBTN, DelBTN, EditBTN, Heading, LabelInput, ShowBtnSVG } from "./utils.jsx";

export function Projects ({formData, setFormData, editing, updateEditing}) {
  const [isOpen, setIsOpen] = useState(null);
  const updateIsOpen = (id) => {
    setIsOpen(prev => prev === id ? null : id);
  }
  const title = 'Projects';
  const addProject = () => {
    const id = crypto.randomUUID();
    setFormData(prev => ({...prev, projects: [...prev.projects, {id, title: '', desc: ''}]}));
  }
  const updateProj = (id, targetField, newvalue) => {
    setFormData(prev => {
      return {...prev, projects: prev.projects.map(project => {
        return project.id === id ? {...project, [targetField]: newvalue } : project;
      })}
    })
  }
  const removeProj = (id) => {
    setFormData(prev => ({...prev, projects: prev.projects.filter(project => project.id !== id)}));
  }
  const isNotEmpty = formData.projects.length > 0;
  return (
    <div>
      <div className="margin-top-1 flex flex-space-between bg-white bor-rad-1 padding-x1-y05">
        <Heading title={title}/>
        <button className="edit-btn show-btn" type='button' onClick={updateEditing}>
          <ShowBtnSVG isShowing={editing}/>
        </button>
      </div>
      { editing && (
        <div>
          { isNotEmpty && (
            <div className="pad-xy-1 bor-rad-1 bg-white margin-top-1">
              { formData.projects.map(project => <Project key={project.id} project={project} updateProj={updateProj} removeProj={removeProj} isOpen={isOpen === project.id} updateIsOpen={() => updateIsOpen(project.id)}/>) }
            </div>
          ) }
          <div className="margin-top-1">
            <button className="add-comp-btn" type='button' onClick={addProject}>Add Project</button>
          </div>
        </div>
      ) }
    </div>
  )
}

function Project ({project, updateProj, removeProj, isOpen, updateIsOpen}) {
  const categories = [
    { id: 'title', label: 'PROJECT TITLE', value: project.title },
    { id: 'desc', label: 'DESCRIPTION', value: project.desc, inputType: 'textarea' }
  ];

  const curry = (id, field) => {
    return (newValue) => {
      updateProj(id, field, newValue);
    }
  }

  if (!isOpen) {
    return (
      <div className="flex flex-space-between pad-xy-1 bg-slight-purple bor-rad-1 margin-top-1">
        <h4>{project.title ? project.title : 'Set project'}</h4>
        <div className="flex">
          <EditBTN onClick={updateIsOpen}/>
          <DelBTN onClick={() => removeProj(project.id)} />
        </div>
      </div>
    )
  }

  return (
    <div className="pad-xy-1 border-2px-grey bor-rad-1 margin-top-1">
      { categories.map(category => <LabelInput key={category.id} id={`${category.id}-${project.id}`} inputType={category.inputType ? category.inputType : null} label={category.label} value={category.value} onChange={curry(project.id, category.id)}/>) }
      <div className="margin-top-1 flex flex-end">
        <DelBTN onClick={() => removeProj(project.id)} />
        <CheckBTN onClick={updateIsOpen} addClass="margin-0"/>
      </div>
    </div>
  )
}