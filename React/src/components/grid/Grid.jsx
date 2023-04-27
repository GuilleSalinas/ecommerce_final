import "./Grid.css"
const Grid = () => {
    // <img src="../../../public/grid/1.jpg" alt="" />
  return (
    <>
    <div className="gallery-container ">
        <div className="gallery--item" data-aos="zoom-in">
            <img src="../../../public/grid/1.jpg" alt="" className="gallery--img" />
            <h5 className="gallery--title">Img 1</h5>
        </div>
        <div className="gallery--item" data-aos="zoom-in">
            <img src="../../../public/grid/4.jpg" alt="" className="gallery--img" />
            <h5 className="gallery--title">Img 2</h5>
        </div>
        <div className="gallery--item">
            <img src="../../../public/grid/6.jpg" alt="" className="gallery--img" />
            <h5 className="gallery--title">Img 3</h5>
        </div>
        <div className="gallery--item" data-aos="zoom-in-left">
            <img src="../../../public/grid/2.jpg" alt="" className="gallery--img" />
            <h5 className="gallery--title">Img 4</h5>
        </div>
        <div className="gallery--item" >
            <img src="../../../public/grid/5.jpg" alt="" className="gallery--img" />
            <h5 className="gallery--title">Img 5</h5>
        </div>
        <div className="gallery--item" data-aos="zoom-in-left">
            <img src="../../../public/grid/3.jpg" alt="" className="gallery--img" />
            <h5 className="gallery--title">Img 6</h5>
        </div>
    </div>
    </>

    )
}

export default Grid