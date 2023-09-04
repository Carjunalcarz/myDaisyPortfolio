import React from 'react'

const Carousel = () => {
  return (
    <>
    <div className='hero bg-base-200 pb-20'>
    <div className="carousel w-[70%] h-[350px]">
  <div id="item1" className="carousel-item w-full">
    <img src="https://thumbs.dreamstime.com/z/abstract-blue-banner-design-blue-geometric-background-vector-illustration-wallpaper-banner-background-card-book-abstract-233083401.jpg"  className="" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-vector/stylish-abstract-web-banner-with-text-space_1017-39039.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://cdn.akamai.steamstatic.com/steam/apps/1928420/capsule_616x353.jpg?t=1693794777" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="data:image/jpeg;base64,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" className="w-full" />
  </div>
</div> 
<div className="flex justify-center h-full w-full items-end py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
    </>
  )
}

export default Carousel