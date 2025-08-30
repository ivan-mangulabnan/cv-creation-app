import { Heading, LabelInput } from "./utils.jsx";

export function Projects ({formData, setFormData}) {
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
  
  return (
    <div>
      <Heading title={title}/>
      <div>
        { formData.projects.map(project => <Project key={project.id} project={project} updateProj={updateProj} removeProj={removeProj}/>) }
      </div>
      <button type='button' onClick={addProject}>Add Project</button>
    </div>
  )
}

function Project ({project, updateProj, removeProj}) {
  const categories = [
    { id: 'title', label: 'Project Title', value: project.title },
    { id: 'desc', label: 'Description', value: project.desc, inputType: 'textarea' }
  ];

  const curry = (id, field) => {
    return (newValue) => {
      updateProj(id, field, newValue);
    }
  }

  return (
    <div>
      { categories.map(category => <LabelInput key={category.id} id={`${category.id}-${project.id}`} inputType={category.inputType ? category.inputType : null} label={category.label} value={category.value} onChange={curry(project.id, category.id)}/>) }
      <button type='button' onClick={() => removeProj(project.id)}>Remove Project</button>
    </div>
  )
}