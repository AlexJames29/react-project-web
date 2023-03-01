import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel variant="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1480689/pexels-photo-1480689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1480689/pexels-photo-1480689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1480689/pexels-photo-1480689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
