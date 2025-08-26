const categories = [
  { id: 'fullname', label: 'FULL NAME' },
  { id: 'occupation', label: 'OCCUPATION' },
  { id: 'address', label: 'ADDRESS' },
  { id: 'phone-number', label: 'PHONE NUMBER' },
  { id: 'email', label: 'EMAIL' },
]

export function PersonalInformation ({ formData, onChange }) {
  function categoriesList () {
    return categories.map(category => <label key={category.id} htmlFor={category.id}>
      <span>{category.label}</span>
      <input id={category.id} type="text" value={formData[category.id] || ''} onChange={e => onChange(category.id, e.target.value)} />
    </label>)
  }

  return (
    <section>
      <h2>Personal Information</h2>
      <form id="personal-info-form">
        { categoriesList() }
      </form>
    </section>
  )
}