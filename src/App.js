import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { getMovies } from './movie-service'
import './App.css'

function App(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies().then(response => setMovies(response))
  }, [])

  return (
    <Container id="browse">
      <Row>
        {movies.map(movie => {
          return (
            <Col xs={6} md={4} lg={3} key={movie.id}>
              <Card onClick={() => props.history.push(`/movie/${movie.id}`)}>
                <Card.Img variant="top" src={movie.image} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default App
