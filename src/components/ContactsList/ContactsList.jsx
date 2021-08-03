import { ContactsList, ContactItem, DeleteButton } from './ContactsList.styled'
import { AiOutlineUser } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'

import { connect } from 'react-redux'
import action from '../../redux/action'

function ContactsListSection({ contacts, onDeleteContact }) {
  return (
    <ContactsList>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <AiOutlineUser /> {contact.name}: {contact.number}
          <DeleteButton
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            <FiX></FiX>
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactsList>
  )
}

const getFilterContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase()

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter),
  )
}

// const mapStateToProps = (state) => {
//   const { filter, items } = state

//   const visibleTodos = getFilterContacts(items, filter)

//   return visibleTodos
// }

const mapStateToProps = ({ items, filter }) => ({
  contacts: getFilterContacts(items, filter),
})

const mapDispathToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(action.deleteContact(id)),
})
export default connect(mapStateToProps, mapDispathToProps)(ContactsListSection)
