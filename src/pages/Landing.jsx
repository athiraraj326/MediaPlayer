import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.jpg'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/feature1.jpg'
import feature2 from '../assets/feature2.jpg'
import feature3 from '../assets/feature3.jpg'

const Landing = () => {
  return (
    <div style={{ paddingTop: '80px' }} className='container'>
      {/* Landing head */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }} className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla harum cumque laboriosam? Optio, sit dicta molestiae doloremque quia ea. Debitis eius, vel fuga nesciunt dicta dolorem sint voluptatibus tenetur beatae!
            Dolorum rerum nihil placeat omnis suscipit similique aspernatur temporibus? Nisi, molestias praesentium. Fuga repellat doloribus obcaecati, unde fugit labore dolor voluptatem magnam recusandae! Quos incidunt, mollitia consectetur asperiores quisquam iusto?</p>
          <Link to={'/home'} className='btn btn-info mt-3'>Get Started!!</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img style={{ width: '550px', height: '350px' }} className='img-fluid ms-5' src={landingImg} alt="" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className="text-center">Featues</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam ipsum laborum!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam ipsum laborum!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam ipsum laborum!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque earum ut dolorem eos. Sit, voluptas totam nesciunt nostrum veritatis sint porro reprehenderit sequi, fugiat asperiores ea vero! Voluptatem, quia nulla.</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque earum ut dolorem eos. Sit, voluptas totam nesciunt nostrum veritatis sint porro reprehenderit sequi, fugiat asperiores ea vero! Voluptatem, quia nulla.</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque earum ut dolorem eos. Sit, voluptas totam nesciunt nostrum veritatis sint porro reprehenderit sequi, fugiat asperiores ea vero! Voluptatem, quia nulla.</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe width="497" height="360" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing