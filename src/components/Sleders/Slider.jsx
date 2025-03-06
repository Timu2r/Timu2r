import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap'
import FotosData from '../Fotos.jsx'
import '../../style/Slider.css'
import Image__2 from '../../assets/intersecting-waves-scattered (1).svg'

const getRecentFotos = (count = 10) => {
	return [...FotosData]
		.sort((a, b) => new Date(b.date) - new Date(a.date))
		.slice(0, count)
}

const Slider = () => {
	const recentFotos = getRecentFotos(10)

	return (
		<Container>
						<img src={Image__2} alt='Background wave' className='foto-svg' />
			<Row className='d-flex align-items-center justify-content-center'>
				<Col md={6} className='text-center'>
					<h1
						className='text-dark'
						style={{
							padding: '80px 0 10px 0',
							fontSize: '2rem',
							fontWeight: 'bold',
						}}
					>
						Недавние фото
					</h1>
					<Carousel
						style={{
							width: '100%',
							maxWidth: '400px',
							margin: '0 auto',
							borderRadius: '10px',
							boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
						}}
						interval={3000}
						fade
					>
						{recentFotos.map((foto, index) => (
							<Carousel.Item key={index} style={{ height: '450px' }}>
								<img
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										borderRadius: '10px',
										boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
									}}
									src={foto.backImg}
									alt={`Slide ${index + 1}`}
									className='d-block w-100'
								/>
								<Carousel.Caption
									style={{
										background: 'rgba(0,0,0,0.5)',
										borderRadius: '5px',
										padding: '10px',
									}}
								>
									<h5>
										{foto.discription || 'Красивое место для путешествий'}
									</h5>
									<p>{foto.place}</p>
								</Carousel.Caption>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>

				<Col
					md={6}
					style={{
						display: 'flex',
						flexDirection: 'column',
						margin: '50px 0',
					}}
					className='text-dark'
				>
					<Accordion className='d-block d-md-none'>
						<Accordion.Item className='custom-accordion' eventKey='0'>
							<Accordion.Header>Путешествия — это ...</Accordion.Header>
							<Accordion.Body>
								Путешествия — это не просто перемещение из одного места в
								другое, а возможность увидеть мир с другой стороны. Каждое
								место, будь то маленький уютный городок, древняя деревня или
								шумный мегаполис, имеет свою уникальную атмосферу, культуру и
								традиции. Гуляя по улицам, где каждый камень дышит историей, мы
								познаём жизнь людей прошлого и настоящего. Мы видим, как
								отличаются архитектура, язык, гастрономия и даже ритм жизни,
								осознавая, насколько велик и разнообразен мир.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey='1'>
							<Accordion.Header>
								Любое путешествие — это история ...
							</Accordion.Header>
							<Accordion.Body>
								Любое путешествие — это история, которую ты создаёшь сам. Это
								неспешные прогулки по старинным улочкам, манящие ароматы
								национальной кухни, незабываемые пейзажи и удивительные
								открытия. Это возможность испытать новые эмоции: почувствовать
								свежий морской бриз, вдохнуть запах тропического леса, ощутить
								спокойствие горных вершин или насладиться ночными огнями
								большого города. Путешествия расширяют границы нашего
								восприятия. Мы учимся смотреть на мир иначе, ценить мелочи и
								понимать людей из разных уголков планеты. Однажды, оказавшись в
								новом месте, мы оставляем в нём частичку себя, а оно, в свою
								очередь, становится частью нашей души.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>

					<p
						className='text-dark fs-18 d-none d-md-block'
						style={{ position: 'relative', top: '70px' }}
					>
						Путешествия — это не просто перемещение из одного места в другое, а
						возможность увидеть мир с другой стороны. Каждое место, будь то
						маленький уютный городок, древняя деревня или шумный мегаполис,
						имеет свою уникальную атмосферу, культуру и традиции. Гуляя по
						улицам, где каждый камень дышит историей, мы познаём жизнь людей
						прошлого и настоящего. Мы видим, как отличаются архитектура, язык,
						гастрономия и даже ритм жизни, осознавая, насколько велик и
						разнообразен мир. Любое путешествие — это история, которую ты
						создаёшь сам. Это неспешные прогулки по старинным улочкам, манящие
						ароматы национальной кухни, незабываемые пейзажи и удивительные
						открытия. Это возможность испытать новые эмоции: почувствовать
						свежий морской бриз, вдохнуть запах тропического леса, ощутить
						спокойствие горных вершин или насладиться ночными огнями большого
						города. Путешествия расширяют границы нашего восприятия. Мы учимся
						смотреть на мир иначе, ценить мелочи и понимать людей из разных
						уголков планеты. Однажды, оказавшись в новом месте, мы оставляем в
						нём частичку себя, а оно, в свою очередь, становится частью нашей
						души.
					</p>
				</Col>
			</Row>
		</Container>
	)
}

export default Slider
