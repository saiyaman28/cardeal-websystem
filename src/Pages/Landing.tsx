// import React from 'react'
import '../Assets/CSS/Pages/Landing.css'
import { Group, Main, Section, Card } from '../Exporter/Components_Exporter'
import { AddClassBody } from '../Exporter/Hooks_Exporter'
import { Car1, Car2, Car3, Carousel1, Carousel2, Carousel3 } from '../Exporter/Public_Exporter'

export default function LandingPage() {
    AddClassBody(`Landing-Page`)

    return (
        <>
            <Main>
                <Section Class={`Carousel-Section`}>
<div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Carousel1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Carousel2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Carousel3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                </Section>
                <Section Title={`FEATURED CARS`} Class={`Featured-Section`}>
                    <Group Wrap>
                        <Card Image={Car1} Title={`MITSUBISHI XPANDER`}/>
                        <Card Image={Car2} Title={`TOYOTA RUSH`}/>
                        <Card Image={Car3} Title={`HONDA CITY`}/>
                        {/* <Card Title={`XPANDER`}/> */}
                    </Group>
                </Section>
            </Main>
        </>
    )
}