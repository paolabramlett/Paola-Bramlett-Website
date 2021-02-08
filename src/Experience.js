import React from "react";
import './Experience.css'

export default function Experience() {
    const pStyle = {
        textAlign: 'justify',
        color: 'black'
    };
    return (
        <div>
            <br />
            <h1>
                Projects Overview
            </h1>
            <br />
            <br />
            <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
    <div className="card">
      <img src="/images/coding.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Front End Development</h5>
        <p className="card-text" style={pStyle}>Recently graduated as a Front End and React Developer. I've been doing some freelance work. I recently developed a weather app and I made a digital menu for a restaurant</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/IMG_4357.JPG" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Photography</h5>
        <p className="card-text" style={pStyle}>As I graduated from Filmschool, I found a passion towards photgraphy. I enjoy taking photos of landscapes, buildings and portraits</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/social-media.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Social Media Marketing</h5>
        <p className="card-text" style={pStyle}>For the las 4 years, I've been doing some freelance social media marketing work with over 10 companies in the state of Oaxaca, Mexico.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/video.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Video Production</h5>
        <p className="card-text" style={pStyle}>In addition to that, I've focused my attention in the creation of engaging video content for advertising and social media marketing</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/after.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Animation</h5>
        <p className="card-text" style={pStyle}>Using different apps to ensure the creation of captivating content, like After Effects for animation</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/graphicdesign.JPG" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Graphic Design</h5>
        <p className="card-text" style={pStyle}>Also, I do several graphic design work for those companies to help the create a more professional advertising</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/Logic.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Audio Production</h5>
        <p className="card-text" style={pStyle}>I've also produced multi-track audio lessons with logic pro X for coaching and leadership companies</p>
      </div>
    </div>
  </div>
</div>

<br />
<br />
<br />
<h1>
  <em>"My main goal is to see YOU achieve YOUR VISION"</em>
</h1>
<br />
<br />
        </div>
       
        

    );
}