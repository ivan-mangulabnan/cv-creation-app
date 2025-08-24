class ContactsList {
  constructor (label, type) {
    this.id = crypto.randomUUID();
    this.label = label;
    this.type = type;
  }
}

export const contactsList = [
  new ContactsList('Email', 'email'),
  new ContactsList('Phone Number', 'text'),
  new ContactsList('LinkedIn', 'text'),
  new ContactsList('X', 'text'),
  new ContactsList('Facebook', 'text'),
  new ContactsList('Instagram', 'text')
]