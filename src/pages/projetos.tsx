import React from 'react'
import styles from './projetos.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import projects from '../../public/documents/projects.json'
import Head from 'next/head';


export default function Projetos() {
    
    return (
        <>
            <Head>
                <title>Projetos | Matheus Felizardo - Desenvolvedor web front-end (Rio de Janeiro - RJ)</title>
            </Head>

            <main className={styles.mainContainer}>
                <section className={styles.leftSideContainer}>
                    <h1>Projetos</h1>
                    
                    <Carousel showStatus={false} showArrows={true} width="800px" className={styles.carouselContent}>
                        {
                            projects.map(project =>(
                                <div key={project.title} className={styles.carouselCard}>
                                    <h2>{project.title}</h2>

                                    <div className={styles.carouselCardWrapper}>
                                        <img src={project.image} alt={project.title} />

                                        <div className={styles.carouselCardDescription}>
                                            <div className={styles.carouselCardDescriptionAbout}>
                                                <h3>Sobre</h3>
                                                <p>{project.description}</p>
                                            </div>

                                            <div className={styles.carouselCardDescriptionTechnologies}>
                                                <h3>Tecnologias</h3>
                                                <p>{project.technologies.join(" | ")}</p>
                                            </div>

                                            <a className={styles.carouselButton} href={project.githubLink} target="_blank">Ver no github</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>

                    <div className={styles.experienceTimeContent}>
                        <p>Tempo de experiência com as tecnologias</p>
                        <br />
                        <p>HTML | Javascript | CSS {"->"} 1 ano</p>
                        <p>Sass | JQuery | Node | Twig {"->"}  8 meses</p>
                        <p>React {"->"}  6 meses</p>
                        <p> Next | Typescript | PHP (Laravel) {"->"}  4 meses</p>
                        <br />
                        <p>O tempo de experiêcia acima refere-se à prática em projetos pessoais.</p>

                    </div>
                </section>

                <section className={styles.rightSideContainer}>
                    <h2>Tecnologias mais utilizadas</h2>

                    <div className={styles.technologiesLinesWrapper}>
                        <div className={styles.technologiesLine}>
                            <img src="/images/technologies/html.svg" alt="HTML" />
                            <img src="/images/technologies/javascript.svg" alt="Javascript" />
                        </div>
                        <div className={styles.technologiesLine}>
                            <img src="/images/technologies/sass.svg" alt="Sass" />
                            <img src="/images/technologies/react.svg" alt="React" />
                        </div>
                        <div className={styles.technologiesLine}>
                            <img src="/images/technologies/next-js.svg" alt="Next" />
                            <img src="/images/technologies/typescript.svg" alt="Typescript" />
                        </div>
                        <div className={styles.technologiesLine}>
                            <img src="/images/technologies/php.svg" alt="PHP" />
                            <img src="/images/technologies/node.svg" alt="Node" />
                        </div>
                    </div>
                        
                    <img className={styles.coding} src="/images/coding.svg" alt="" />
                </section>
            </main>
        </>
    )
}
