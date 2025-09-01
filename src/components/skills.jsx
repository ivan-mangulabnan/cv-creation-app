import { useState } from "react";
import { CheckBTN, DelBTN, EditBTN, Heading, ShowBtnSVG } from "./utils.jsx";

export function Skills ({formData, setFormData, editing, updateEditing}) {
  const title = 'Skills';
  const addSkills = () => {
    const id = crypto.randomUUID();
    setFormData(prev => {
      return {...prev, skills: [...prev.skills, {id: id, value: ''}]}
    })
  }
  
  const updateForm = (id, newValue) => {
    setFormData(prev => ({...prev, skills: prev.skills.map(skill => {
      return skill.id === id ? {...skill, value: newValue} : skill;
    })}))
  }

  const deleteSkill = (id) => {
    setFormData(prev => ({...prev, skills: prev.skills.filter(skill => skill.id !== id)}))
  }
  return (
    <div className="margin-top-1">
      <div className="flex flex-space-between bg-white padding-x1-y05 bor-rad-1">
        <Heading title={title}/>
        <button className="edit-btn show-btn" type='button' onClick={updateEditing}>
          <ShowBtnSVG isShowing={editing}/>
        </button>
      </div>
      { editing && (
        <div className="margin-top-1 bor-rad-1">
          <div className="flex pad-xy-1 flex-wrap gap-2">
            { formData.skills.map(skill => <Tiles key={skill.id} skill={skill} updateForm={updateForm} deleteSkill={deleteSkill}/>) }
          </div>
          <div className="margin-top-1">
            <button className="add-comp-btn" type="button" onClick={addSkills}>Add Skill</button>
          </div>
        </div>
      ) }
    </div>
  )
}

function Tiles ({skill, updateForm, deleteSkill}) {
  const [editForm, setEditForm] = useState(false);
  const edit = () => {
    setEditForm(prev => !prev);
  }

  const skillID = `skill-${skill.id}`;

  if (editForm) {
    return (
      <div className="flex flex-space-between width-100">
        <div>
          <label className="skill-label" htmlFor={skillID}>SKILL</label>
          <input className="skill-input" id={skillID} type="text" value={skill.value ? skill.value : ''} onChange={(e) => updateForm(skill.id, e.target.value)}/>
        </div>
        <div className="flex">
          <DelBTN onClick={() => deleteSkill(skill.id)}/>
          <CheckBTN onClick={edit}/>
        </div>
      </div>
    )
  }

  return (
    <div>
      <button className="skill-btn" onClick={edit}>{skill.value ? skill.value : 'Click me'}</button>
    </div>
  )
}