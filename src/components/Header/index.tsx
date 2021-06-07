import React from 'react'
import styles from './styles.module.scss'

export const Header = () => {
    return (
        <nav className={styles.header}>
            <a href="/">Sobre</a>
            <a href="/projetos">Projetos</a>
            <a target="blank" href="https://api.whatsapp.com/send?phone=+5521965572555&text=Olá Matheus!!">Contato</a>
            <a className={styles.curriculum} href="/documents/matheuscurriculum.pdf" download>Currículo</a>
        </nav>
    )
}
