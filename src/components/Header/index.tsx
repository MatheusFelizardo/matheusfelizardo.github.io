import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export const Header = () => {
    return (
        <nav className={styles.header}>
            <Link href="/">Sobre</Link>
            <Link href="/projetos">Projetos</Link>
            <a target="blank" href="https://api.whatsapp.com/send?phone=+5521965572555&text=Olá Matheus!!">Contato</a>
            <a href="/documents/matheuscurriculum.pdf" download>Currículo</a>
        </nav>
    )
}
