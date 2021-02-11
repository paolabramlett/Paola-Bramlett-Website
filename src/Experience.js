import React from "react";
import './Experience.css'
import ProjectsTitle from './ProjectsTitle';

export default function Experience() {
    return (
        <div>
            <br />
            <ProjectsTitle />
            <br />
            <br />
            <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
    <div className="card text-center bg-transparent border-white">
      <img src="/images/coding.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">React Front-End Development</h5>
        <p className="card-text" > Earlier this year, I challanged myself to learn coding. I took a Front-End Development and a React Development Workshop and since then I've been coding and designing nonstop.
        I found a passion towards the world of coding. It's been challanging but also super rewarding.
        I've been doing some freelance work since the moment I graduated and I hope I get to continue on this path.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center bg-transparent border-white">
      <img src="/images/social-media.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Social Media Marketing</h5>
        <p className="card-text" >Over the last 4 years, I've been doing Freelance Social Media Marketing work with over 13 companies in the state of Oaxaca, Mexico.
        Thanks to that, I've developed sevral new abilities creating valuable content for medium size businesses' accounts, helping them achieve their marketing goals.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center bg-transparent border-white">
      <img src="/images/graphicdesign.JPG" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Graphic Design</h5>
        <p className="card-text" >Also, I've been doing several Graphic Design work for those companies to help the create a more professional advertising that they can use 
        on their Social Media accounts and on the real world.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center bg-transparent border-white">
      <img src="/images/IMG_4357.JPG" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Photography</h5>
        <p className="card-text" >As I graduated from Filmschool, I found a passion towards photgraphy. I enjoy taking photos of landscapes, buildings and portraits, but also, it has been
        extremely helpful while shooting pictures of products and services for my clients to better portray their essence.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center bg-transparent border-white">
      <img src="/images/video.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Video Production</h5>
        <p className="card-text" >In addition to that, I've focused my attention in the creation of engaging video content for advertising and social media marketing.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center bg-transparent border-white">
      <img src="/images/after.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Animation</h5>
        <p className="card-text">Using different apps to ensure the creation of captivating content, like After Effects for animation.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center bg-transparent border-white">
      <img src="/images/Logic.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Audio Production</h5>
        <p className="card-text">I've also produced multi-track audio lessons with logic pro X for a coaching and leadership company</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center bg-transparent border-white">
      <img src="/images/paolatres.JPG" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">I'm also a musician!</h5>
        <p className="card-text" >Music has been one of my biggest passions and hobbies. You can find a couple of my songs on Spotify</p>
        <a href="https://open.spotify.com/artist/0PbCM1PGIbVuduk94Yll5J?si=jJw4noFjS367Ytbq0cOu0g" target="_blank" rel="noreferrer" className="btn btn-light">Go to Spotify</a>
      </div>
    </div>
  </div>
</div>

        </div>
       
        

    );
}