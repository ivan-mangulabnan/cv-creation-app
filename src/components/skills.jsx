import { useState } from "react";
import { Heading } from "./utils.jsx";

export function Skills ({formData, setFormData}) {
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
    <div>
      <Heading title={title}/>
      <div>
        { formData.skills.map(skill => <Tiles key={skill.id} skill={skill} updateForm={updateForm} deleteSkill={deleteSkill}/>) }
      </div>
      <div>
        <button type="button" onClick={addSkills}>Add Skill</button>
      </div>
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
      <div>
        <div>
          <label htmlFor={skillID}>Skill</label>
          <input id={skillID} type="text" value={skill.value ? skill.value : ''} onChange={(e) => updateForm(skill.id, e.target.value)}/>
        </div>
        <div>
          <button type="button" onClick={() => deleteSkill(skill.id)}>DELETE</button>
          <button type="button" onClick={edit}>DONE</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <button onClick={edit}>{skill.value ? skill.value : 'Default'}</button>
    </div>
  )
}