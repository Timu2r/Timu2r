import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import {
	RiDiscordLine,
	RiGithubLine,
	RiPhoneLine,
	RiTelegram2Line,
} from 'react-icons/ri'
import Image__3 from './assets/intersecting-wave-layers (1).svg'
import Image__2 from './assets/intersecting-waves-scattered (1).svg'
import Image__1 from './assets/MainLogo.jpg'
import Image__1__2 from './assets/photo_5_2025-02-13_15-08-14.jpg'
import FooterPanel from './components/Footer'
import Slider from './components/Sleders/Slider'
import './Home.css'
import { useRef } from 'react'


export default function Home({ scrollDis, refs }) {
  const discRef = useRef(null);

  const offsets = {
    dis: -10,
  };

  const handleScroll = (ref, panel) => {
    if (ref && ref.current) {
      const yOffset = offsets[panel] || 0;
      const yPosition =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

	return (
		<div className='home-main'>
			<div className='home'>
				<img src={Image__2} alt='Background wave' className='foto-svg' />
				<Container className='content'>
					<Row className='w-100'>
						<Col className='mt-5' md={6}>
							<h1 className='text-warning'>Кратко о себе</h1>
							<p className='text-light mt-5'>
								Меня зовут Тимур. Я увлекаюсь веб-разработкой и активно изучаю
								JavaScript и React с сентября 2024 года. Мне нравится создавать
								интерфейсы, работать с DOM и создавать собственные проекты,
								такие как онлайн-библиотеки и калькуляторы. В свободное время я
								совершенствую навыки фронтенд-разработки и экспериментирую с
								созданием интерактивных компонентов для сайтов.
							</p>
							<Button variant='warning' onClick={() => {
					handleScroll(discRef, 'dis')
				}}>Подробнее</Button>
							<div className='links mt-5'>
								{[
									{
										href: 'https://t.me/timu2r',
										icon: <RiTelegram2Line />,
									},
									{
										href: 'https://discord.gg/BPRgVfeH',
										icon: <RiDiscordLine />,
									},
									{
										href: 'tel:+79953004459',
										icon: <RiPhoneLine />,
									},
									{
										href: 'https://github.com/Timu2r',
										icon: <RiGithubLine />,
									},
								].map((link, index) => (
									<a
										key={index}
										href={link.href}
										className='fs-1'
										target='_blank'
										rel='noopener noreferrer'
									>
										{link.icon}
									</a>
								))}
							</div>
						</Col>

						<Col
							md={6}
							className='d-flex justify-content-center align-items-center d-md-none'
							style={{ margin: '0 0 100px 0' }}
						>
							<img src={Image__1} alt='Main Logo' className='main-image' />
						</Col>

						<Col
							md={6}
							className='d-flex justify-content-center align-items-center d-none d-md-flex'
						>
							<img src={Image__1} alt='Main Logo' className='main-image' />
						</Col>
					</Row>
				</Container>
			</div>
			<div className='slide-wrapper'>
				<Container>
					<Slider />
				</Container>
			</div>
			<img src={Image__3} alt='Background layer' className='foto-svg-2' />

			<div className='home' >
			<Container ref={discRef}>

				<Row className='d-flex align-items-center justify-content-center'>
					<Col
						md={6}
						style={{
							display: 'flex',
							flexDirection: 'column',
							margin: '120px 0',
						}}
						className='text-dark'
					>
		<h1 className='h-1__s3'>Обо мне</h1>
						<Accordion className='d-block d-md-none'>
							<Accordion.Item className='custom-accordion' eventKey='0'>
								<Accordion.Header>Обо мне ...</Accordion.Header>
								<Accordion.Body>
									Меня зовут Тимур, я родился 21 марта 2008 года в Москве. Мне
									16 лет, и я увлечён программированием, особенно
									веб-разработкой и фреймворком React.js. С сентября 2024 года я
									активно изучаю JavaScript, а позже начал изучать React.js,
									стремясь стать полноценным веб-разработчиком. Я уже умею
									создавать веб-сайты и писать большие объёмы кода в VSCode. В
									настоящее время я работаю над новым проектом, который помогает
									мне оттачивать свои навыки и исследовать новые возможности
									веб-разработки. Я также люблю экспериментировать с новыми
									технологиями и создавать небольшие проекты, чтобы применять
									полученные знания на практике. Мой интерес к созданию
									собственных библиотек и уникальных решений помогает мне
									развивать креативность и аналитическое мышление. Моя цель —
									полностью освоить веб-разработку и создавать качественные
									проекты. Я хочу не только использовать готовые решения, но и
									разрабатывать собственные библиотеки на React. Для меня важны
									интересные темы, практические задания и детальные объяснения,
									чтобы расти и развиваться как разработчик. Мои проекты можно
									найти на GitHub в открытом виде.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>

						<p className='text-light fs-18 d-none d-md-block'>
							Меня зовут Тимур, я родился 21 марта 2008 года в Москве. Мне 16
							лет, и я увлечён программированием, особенно веб-разработкой и
							фреймворком React.js. С сентября 2024 года я активно изучаю
							JavaScript, а позже начал изучать React.js, стремясь стать
							полноценным веб-разработчиком. Я уже умею создавать веб-сайты и
							писать большие объёмы кода в VSCode. В настоящее время я работаю
							над новым проектом, который помогает мне оттачивать свои навыки и
							исследовать новые возможности веб-разработки. Я также люблю
							экспериментировать с новыми технологиями и создавать небольшие
							проекты, чтобы применять полученные знания на практике. Мой
							интерес к созданию собственных библиотек и уникальных решений
							помогает мне развивать креативность и аналитическое мышление. Моя
							цель — полностью освоить веб-разработку и создавать качественные
							проекты. Я хочу не только использовать готовые решения, но и
							разрабатывать собственные библиотеки на React. Для меня важны
							интересные темы, практические задания и детальные объяснения,
							чтобы расти и развиваться как разработчик. Мои проекты можно найти
							на GitHub в открытом виде.
						</p>
					</Col>

					<Col
						md={6}
						className='text-center '
						style={{
							margin: '0px 0',
						}}
					>
						<img src={Image__1__2} alt='Profile' className='main-image-2' />
					</Col>
				</Row>
			</Container>
			</div>
			<FooterPanel />
		</div>
	)
}