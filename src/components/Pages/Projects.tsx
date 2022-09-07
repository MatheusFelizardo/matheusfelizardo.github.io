import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import useLanguage from '../../hooks/useLanguage';
import ProjectItem from '../Modal/ProjectItem';
import projects from '../../../public/documents/projects.json'
import { Typography, notification } from 'antd';
const { Text, Title } = Typography;
import { blue, green, red } from '@ant-design/colors';

export default function Projects() {
  const { translate, language } = useLanguage()
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    notification.destroy()
    if(!language) return
    if (showPopup) {
      notification.open({
        placement: 'top',
        message: <span className="message">{translate('Click in the images to get informations about the project')}</span>,
      })
      setShowPopup(false)
    }
  }, [language])
  
  return (
    <>
      <Container>
        <ProjectsContainer>
          {projects.map((project, index) => {
            return (
              <ProjectItem key={index} project={project}/>
            )
          })}
        </ProjectsContainer>
        <Overlay />
      </Container>
    </>
    )
}


const Container = styled.section`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  max-height: 100vh;
  overflow-y: auto;
  
  .icon {
    svg {
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 1.25rem 3.125rem;
    padding-top: 15vmin;
  }

`

const ProjectsContainer = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

`
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background: linear-gradient(115deg, rgba(255,255,255,0) 80%, rgba(0, 17, 255, .3) 100%);
  opacity: 0;
  animation: fade .6s linear forwards;

  @keyframes fade {
    100% { opacity: 1;}
  }
`