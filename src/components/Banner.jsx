import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Developer', 'Designer', 'Freelancer', 'Photographer', 'Blogger']

    const [text, setText] = useState('Developer')
    const [delta, setDelta] = useState(300 - Math.random() * 1000)
    const period = 2000


    useEffect(() => {

        let tiker = setInterval(() => {
            tick()
        }, delta)
        return () => { clearInterval(tiker) }

    },)

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if (isDeleting) {
            setDelta(isDeleting ? 150 : 300 - Math.random() * 100)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }


    return (
        <section className='banner' id='home'>
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'> Welcome to my Portfolio</span>
                        <h1>
                            {`Hi I'm webdecoded `}
                            <span className='wrap' >{text}</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aspernatur sint, quo voluptatem ab illo iusto sapiente quisquam enim labore et unde veniam maxime cupiditate velit ea consequatur blanditiis sit.
                        </p>
                        <button onClick={() => {
                            console.log('clicked')
                        }}>
                            Let's connect
                            <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt=" Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner