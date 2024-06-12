import React from 'react'
import './Services.css'
import Galleryicon from '../../assets/Gallery-Icon.png'
import priceicon from '../../assets/price.png'
import service from '../../assets/sevices.png'

const Services = () => {
  return (
<div class="backa">
        <h3>SERVICES</h3>
    <div class="carda">
  <div class="contenta">
    <img src={Galleryicon}/>
    <p class="para">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam
      at voluptas minus culpa deserunt delectus sapiente inventore pariatur
    </p>
  </div>
</div>
<div class="carda">
  <div class="contenta">
  <img src={priceicon}/>
    <p class="para">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam
      at voluptas minus culpa deserunt delectus sapiente inventore pariatur
    </p>
  </div>
</div>
<div class="carda">
  <div class="contenta">
  <img src={service}/>
    <p class="para">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam
      at voluptas minus culpa deserunt delectus sapiente inventore pariatur
    </p>
  </div>
</div>
</div>
  )
}

export default Services
