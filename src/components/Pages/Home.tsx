import styled from 'styled-components';
import ProfilePic from '../../../public/images/profile.jpg'
import Image from 'next/image';
import { FaGuitar, FaGamepad, FaBook, FaCheckCircle, FaReact, FaDrupal } from 'react-icons/fa'
import { IoMdFootball } from 'react-icons/io'
import { BiCameraMovie } from 'react-icons/bi'
import { GiThreeFriends, GiPartyPopper } from 'react-icons/gi'
import { Space, Typography, Timeline, Anchor } from 'antd';
const { Text, Title } = Typography;
import { Tabs } from 'antd';
import { blue, green, red } from '@ant-design/colors';
import { TwitterOutlined, InstagramOutlined, FacebookOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { Avatar, List } from 'antd';
import useLanguage from '../../hooks/useLanguage';
import { useEffect, useState } from 'react';

const { TabPane } = Tabs;

const Hobbies = () => {
  const { translate } = useLanguage()

  return (
    <HobbieCards>
      <HobbieCard>
        <Icon>
          <FaGuitar />
        </Icon>
        <Box>
          <Text>{translate("My favourite hobbie is")} <strong>{translate("play guitar")}</strong>.</Text>
          <br />
          <Text>{translate("I'm not very good, but I play almost every day.")}</Text>
        </Box>
      </HobbieCard>

      <HobbieCard>
        <Icon>
          <IoMdFootball />
        </Icon>
        <Box>
          <Space direction="vertical" size={1}>
            <Text>{translate("Here is one I used to play but now I just watch, but still love it.")}</Text>
            <Text>{translate("I love to watch soccer. I support ")}<strong><span style={{color: red[5]}}>Flamengo</span></strong> {translate("in Brazil, I'm a truly fan.")}</Text>
          </Space>
        </Box>
      </HobbieCard>

      <HobbieCard>
        <Icon>
          <FaGamepad />
        </Icon>
        <Box>
          <Space direction="vertical" size={1}>
            <Text>{translate("I also like to")} <strong>{translate("play video games")}</strong> {translate("and")} <strong>{translate("RPG games")}</strong>.</Text>
            <Text>{translate("Currently I'm not playing too much, but every time I have a free time, I play a little")}.</Text>
          </Space>
        </Box>
      </HobbieCard>

      <HobbieCard>
        <Icon>
          <GiThreeFriends />
        </Icon>
        <Box>
          <Text>{translate("I LOVE")} <strong>{translate("hangout with my friends")}</strong>.</Text>
          <br />
          <Text>{translate("Don't mater the place, I just love to be with them")}.</Text>
        </Box>
      </HobbieCard>

      <HobbieCard>
        <Icon>
          <BiCameraMovie />
        </Icon>
        <Box>
          <Space direction="vertical" size={1}>
            <Text>{translate("I love go to the")} <strong>{translate("movies")}</strong>.</Text>
            <Text>{translate("I go pretty often, every time I can")}.</Text>
            <Text>{translate("I'm not a film critic, I just love to go")}.</Text>
          </Space>
        </Box>
      </HobbieCard>
    </HobbieCards>
  )
}

const Career = () => {
  const { translate } = useLanguage()

  return (
    <CareerWrapper>
      <Timeline >
      <Timeline.Item dot={ <FaDrupal style={{ fontSize: '20px'}} /> } >
        {translate("Get my first internation job in Envivent, as web developer using Drupal and React. (Apr 2022)")}
        </Timeline.Item>
        <Timeline.Item dot={ <FaReact style={{ fontSize: '20px'}} /> } >
          {translate("Starting to work as software developer in Intelie, using React. (Jun 2021)")}
        </Timeline.Item>
        <Timeline.Item dot={ <FaCheckCircle style={{ fontSize: '16px'}} /> } >
          {translate("Get a promotion on Inforce, to Junior Front-end developer. (Jan 2021)")}
        </Timeline.Item>
        <Timeline.Item>
          {translate("Get my first job on Inforce, starting as trainee. (Oct 2020)")}
        </Timeline.Item>
        <Timeline.Item dot={ <FaBook style={{ fontSize: '16px', }} /> } >
          {translate("Started to study HTML, CSS and Javascript (Mar 2020)")}
        </Timeline.Item>
      </Timeline>
    </CareerWrapper>
  )
}

const Goals = () => {
  const { translate } = useLanguage()

  return (
    <Space direction="vertical" size={12}>
      <div>
      <Title level={2} style={{marginBottom:0, color: blue.primary}}>2022</Title>
      <Space direction="vertical" size={2}>
        <Text>{translate("Learn more about software architecture")}</Text>
        <Text>{translate("Start to study spanish")}</Text>
        <Text>{translate("Be fluent in English with an study exchange")}</Text>
        <Text delete>{translate("Start in a international company")}</Text>
      </Space>
      </div>
      <div>
      <Title level={2} style={{marginBottom:0, color: blue.primary}}>2021</Title>
      <Space direction="vertical" size={2}>
        <Text delete>{translate("Improve my CSS skills")}</Text>
        <Text delete>{translate("Improve my English")}</Text>
        <Text delete>{translate("Start working with React")}</Text>
      </Space>
      </div>
    </Space>
  )
}

const SocialMedia = () => {
  return(
    <Space className="social-media" size={40} style={{marginTop: '1rem'}}>
        <a className="icon" target="blank" href="https://github.com/MatheusFelizardo">
          <GithubOutlined style={{ fontSize: '30px', color: '#08c' }} />
        </a>
        <a className="icon" target="blank" href="https://www.linkedin.com/in/matheus-felizardo">
          <LinkedinOutlined style={{ fontSize: '30px', color: '#08c' }} />  
        </a>
        <a className="icon" target="blank" href="https://www.instagram.com/matheus.felizardo_">
          <InstagramOutlined style={{ fontSize: '30px', color: '#08c' }}/>
        </a>
        <a className="icon" target="blank" href="https://www.facebook.com/matheus.felizardo.3">
          <FacebookOutlined style={{ fontSize: '30px', color: '#08c' }}/>
        </a>

        <a className="icon" target="blank" href="https://www.twitter.com/theusfelizardo1">
          <TwitterOutlined style={{ fontSize: '30px', color: '#08c' }} />
        </a>
    </Space>
  )
}


export default function Home() {
  const { translate, language } = useLanguage()

  useEffect(() => {

  }, [language])

  const birthdate = Number((new Date(Date.now()).getFullYear())) - Number(new Date('1995/02/11').getFullYear())
  return (
    <>
    <Container>
      <Wrapper>
        <Box>
          <Space direction="vertical" size={4}>
            <Text>{translate("Hi, I'm")} </Text>
            <Title className='title' title="Matheus Felizardo">Matheus Felizardo.</Title>
            <Text>{translate("I'm a front-end developer based in Rio de Janeiro, Brazil.")}</Text>
            <Text>{translate("I'm")} {birthdate} {translate("years old and I'm a developer since October/2020.")}</Text>
            <Text>{translate("Currently working at Envivent.")}</Text>
          </Space>
        </Box>

        <ImageWrapper>
          <Image src={ProfilePic} alt="Matheus picture" />
        </ImageWrapper>
      </Wrapper>

      <Box>
      <Tabs defaultActiveKey="1">
        <TabPane tab={translate("Hobbies")} key="1">
          <Hobbies />
        </TabPane>
        <TabPane tab={translate("Career")} key="2">
          <Career />
        </TabPane>
        <TabPane tab={translate("Goals")} key="3">
          <Goals />
        </TabPane>
        <TabPane tab={translate("Social Media")} key="4">
          <SocialMedia />
        </TabPane>
      </Tabs>
        {/* <Tabs items={items} /> */}
      
      </Box>

     <Overlay />
    </Container>
    </>
  )
}


const Container = styled.section`
  max-width: 1280px;
  width: 100%;
  height: 100vh;
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

  .social-media {
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    padding: 1.25rem 3.125rem;
  }
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background: linear-gradient(115deg, rgba(255,255,255,0) 80%, rgba(24,144,255,.4) 100%);
  opacity: 0;
  animation: fade .6s linear forwards;

  @keyframes fade {
    100% { opacity: 1;}
  }
`
const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    height: 40%;
  }
`

const Box = styled.div`

  .title {
    color: ${blue.primary};
    font-size: 3rem;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    height: 60%;
  }

`

const Flex = styled.div`
  display: flex;
  gap: 1rem;
`

const ImageWrapper = styled.div`
  display: none;
  img {
    clip-path: circle(40%);
  }

  @media (min-width: 768px) {
    display: initial;

    width: 200px;
  }

  @media (min-width: 1024px) {
    width: 300px;
  }
`

const Icon = styled.div`
  svg {
    font-size: 22px;
    color: ${blue.primary}
  }
`

const HobbieCards = styled.section`
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 1024px) {
    gap: 2rem;
    justify-content: initial;
  }
`
const HobbieCard = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  gap: 1rem;
  border: 1px solid ${blue[2]};
  padding: 1rem;

  @media (min-width: 600px) {
    max-width: calc(50% - 1rem);
    width: calc(50% - 1rem);
  }

  @media (min-width: 1024px) {
    width: 30%;
    max-width: 30%;
  }
`

const CareerWrapper = styled.section`
  max-width: 600px;
  padding-top: 1rem;
  .ant-timeline-item-tail {
    border-left: 2px solid ${blue[5]};
  }
  .ant-timeline-item-head-custom {
    background: transparent;
  }

  .ant-timeline-item-content {}
`