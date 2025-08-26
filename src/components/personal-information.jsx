const categories = [
  { id: 'fullname', label: 'Full Name' },
  { id: 'occupation', label: 'Occupation' },
  { id: 'address', label: 'Address' },
  { id: 'phone-number', label: 'Phone Number' },
  { id: 'email', label: 'Email' },
]

export function PersonalInformation ({ formData, onChange }) {
  function categoriesList () {
    return categories.map(category => <label key={category.id} htmlFor={category.id}>
      {category.label}
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