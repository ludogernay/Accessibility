"use client"
import React from 'react'

function Form() {
  const nameRegex = new RegExp('^[a-zA-Z]+$')
  const emailRegex = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$')
  const phoneRegex = new RegExp('^(?:(?:\\+|00)33|0)[67]\\d{8}$')

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!nameRegex.test(event.target.value)) {
      document.getElementById('nameError')!.innerText = 'Le nom ne doit contenir que des lettres.'
    }
    else {
      document.getElementById('nameError')!.innerText = ''
    }
  }
  const handleForname = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!nameRegex.test(event.target.value)) {
      document.getElementById('fornameError')!.innerText = 'Le prénom ne doit contenir que des lettres.'
    }
    else {  
      document.getElementById('fornameError')!.innerText = ''
    }
  }
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!emailRegex.test(event.target.value)) {
      document.getElementById('emailError')!.innerText = 'L\'email est invalide.'
    }
    else {
      document.getElementById('emailError')!.innerText = ''
    }
  }
  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length < 30) {
      document.getElementById('messageError')!.innerText = 'Le message doit contenir au moins 30 caractères.'
    }else {
      document.getElementById('messageError')!.innerText = ''
    }
  }
  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!phoneRegex.test(event.target.value)) {
      document.getElementById('phoneError')!.innerText = 'Le numéro de téléphone est invalide.'
    }
    else {
      document.getElementById('phoneError')!.innerText = ''
    }
  }
  return (
    <div className= ' h-auto w-auto flex-col justify-center items-center'>
        <h1 className='text-white text-2xl text-center'>Contact Us</h1>
        <form className='flex flex-col w-full mx-auto'>
            <label className='text-white pt-5'>Nom</label>
            <input className='' type='text' onChange={handleName}/>
            <p className='text-red-600 mt-0' id='nameError'></p>
            <label className='text-white pt-5'>Prénom</label>
            <input className='' type='text' onChange={handleForname}/>
            <p className='text-red-600 mt-0' id='fornameError'></p>
            <label className='text-white pt-5'>Email</label>
            <input className='' type='email' onChange={handleEmail}/>
            <p className='text-red-600 mt-0' id='emailError'></p>
            <label className='text-white pt-5'>Téléphone</label>
            <input className='' type='text' onChange={handlePhone}/>
            <p className='text-red-600 mt-0' id='phoneError'></p>
            <label className='text-white pt-5'>Date de naissance</label>
            <input className='' type='date'/>
            <label className='text-white pt-5'>Message</label>
            <textarea className='' onChange={handleMessage}/>
            <p className='text-red-600 mt-0' id='messageError'></p>
            <button className='bg-blue-500 text-white mt-10 rounded-lg'>Submit</button>
        </form>
    </div>
  )
}

export default Form