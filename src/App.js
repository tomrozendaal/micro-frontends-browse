import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './App.css'

function App(props) {
  const movies = [
    {
      id: 1,
      title: 'Ford v Ferrari',
      image:
        'https://m.media-amazon.com/images/M/MV5BYzcyZDNlNDktOWRhYy00ODQ5LTg1ODQtZmFmZTIyMjg2Yjk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX675_AL_.jpg',
      video: 'https://www.youtube.com/embed/zyYgDtY2AMY'
    },
    {
      id: 2,
      title: 'Doctor Sleep',
      image:
        'https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      video: 'https://www.youtube.com/embed/2msJTFvhkU4'
    },
    {
      id: 3,
      title: 'Star Wars: The Rise Of Skywalker',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      video: 'https://www.youtube.com/embed/8Qn_spdM5Zg'
    },
    {
      id: 4,
      title: 'Jumanji: The Next Level',
      image:
        'https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      video: 'https://www.youtube.com/embed/F6QaLsw8EWY'
    },
    {
      id: 5,
      title: 'Knives Out',
      image:
        'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SY1000_SX675_AL_.jpg',
      video: 'https://www.youtube.com/embed/qGqiHJTsRkQ'
    },
    {
      id: 6,
      title: 'Once Upon a Time... in Hollywood',
      image:
        'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      video: 'https://www.youtube.com/embed/Scf8nIJCvs4'
    },
    {
      id: 7,
      title: 'Joker',
      image:
        'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      video: 'https://www.youtube.com/embed/zAGVQLHvwOY'
    },
    {
      id: 8,
      title: 'The Irishman',
      image:
        'https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,682,1000_AL_.jpg',
      video: 'https://www.youtube.com/embed/WHXxVmeGQUc'
    }
  ]

  console.log(JSON.stringify(movies))
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
