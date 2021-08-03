import React, { useState, useEffect } from 'react'
import { Title, SubTitle, Container } from './App.styled'
import ContactForm from '../Form/ContactForm'
import ContactsListSection from '../ContactsList/ContactsList'
import Filter from '../Filter/Filter'
import contactsData from '../Data/contactsData.json'
import shortid from 'shortid'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? contactsData,
  )
  const [filter, setFilter] = useState('')

  // const forSubmitHendler = (name, number) => {
  //   const newContact = {
  //     id: shortid.generate(),
  //     name: name,
  //     number: number,
  //   }

  //   if (contacts.some((contact) => contact.name === name)) {
  //     toast.error(`${name} is already in contact`)
  //     return
  //   }

  //   setContacts((prevState) => [newContact, ...prevState])
  // }

  const onChangeFilter = (event) => {
    const value = event.target.value
    setContacts(value)
  }

  // const DeleteContact = (id) => {
  //   setContacts((prevState) => prevState.filter((contact) => contact.id !== id))
  // }

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase()

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  // useEffect(() => {
  //   const contacts = window.localStorage.getItem('contacts')
  //   const parseContacts = JSON.parse(contacts)

  //    if (parseContacts) {
  //     setContacts(parseContacts)
  //   }

  // }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  // const filterContacts = getFilterContacts()

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>

      <Filter
      //value={filter} onChange={onChangeFilter}
      />

      <ContactsListSection />

      <ToastContainer />
    </Container>
  )
}
