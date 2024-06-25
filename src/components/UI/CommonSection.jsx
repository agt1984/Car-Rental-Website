
import React from 'react'
import { Container } from 'reactstrap' 

const CommonSection = () => {
  return (
    <section className='common__section'>
        <Container className='text-center'>
            <h1 className='text-ligth'>{title}</h1>
        </Container>
    </section>
  )
}

export default CommonSection