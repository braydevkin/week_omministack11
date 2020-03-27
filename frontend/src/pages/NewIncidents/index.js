import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../services/api'

import './style.css'

export default function NewIncidents() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

   async function handleNewIncidents(e){
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }
        try{
            await api.post('incidents', data,{
                headers:{
                    Authorization: ongId,
                }
            })
            history.push('/profile')
        }
        catch(err){
            alert('Erro ao cadastrar causa, tente novamente')
        }
    }

    return (
        <div className="newincidents-conteiner">
            <div className="content">
                <section>
                    <img src={logoImg} alt='Be the Hero' />
                    <h1>Cadastrar novo caso</h1>
                    <p>Escreva seu caso detalhadamente para conseguir possíveis heróis para sua causa</p>
                    <Link to="/profile*taskkill /f /im node.exe*/" className='back-link'>
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit = {handleNewIncidents}>
                    <input
                        placeholder="Título do caso"
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value = {description}
                        onChange = {e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em R$"
                        value = {value}
                        onChange = {e => setValue(e.target.value)}
                    />

                    <button className='button' type='submit'> Cadastrar Caso</button>
                </form>
            </div>
        </div>
    )
}