import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './style.css'

import logoImg from '../../assets/logo.svg'
import api from '../services/api'

export default function Profile() {
    const [incidents, setIncidents] = useState([])

    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(Response => {
            setIncidents(Response.data)
        })
    }, [ongId])

    async function handleDeleteIncidents(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })
            setIncidents(incidents.filter(incidents => incidents.id != id))
        }
        catch (error) {
            alert('Erro ao deletar caso, tente novamente')
        }
    }
    function handleLogout(){
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className='profile-conteiner'>
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem-vinda, {ongName}</span>
                <Link className='button' to="/incidents/new">Cadastrar novo caso</Link>
                <button type='button' onClick = {handleLogout}>
                    <FiPower size={18} color='#E02141' />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.title}</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>{incidents.description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incidents.value)}</p>

                        <button onClick={() => handleDeleteIncidents(incidents.id)} type='button'>
                            <FiTrash2 size={20} color='#a8a8b3' />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}