import carousel1 from "../images/carousel1.jpeg";
import carousel2 from "../images/carousel2.jpeg";
import carousel3 from "../images/carousel3.jpg";
import foodbank from "../images/foodbank.png";

const Carousel = () => {
    return ( 
        <div className="contents">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators login-carousel-button">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                            <div className="card text-white">
                                <img src={ carousel1 } className="card-img d-block w-100" alt="hunger" style={{height: "600px"}} />
                                <div className="card-img-overlay">
                                    <h1 className="card-title mb-5 ms-4"><img src={ foodbank } style={{height: "100px"}} alt="logo" /></h1>
                                    <h1 className="card-text mb-5 ms-4 text-black"><b>Feed a soul.</b></h1>
                                    <p className="card-text mt-5 ms-4 me-4 p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", textAlign: "justify"}}>
                                        Feeding the hungry is protecting global health through food safety and education
                                        In a world where the World Health Organization reports that more than 870 million 
                                        people go to bed hungry each night, E-FoodBank NG is on a mission to address one of the biggest 
                                        challenges the world faces today: food insecurity.
                                        We believe that to eradicate hunger, the world needs to accomplish three essential goals: 
                                        reduce overall food waste, produce enough food to feed the growing population, 
                                        and establish universal food safety principles.
                                        The good news is that, E-FoodBank NG would be connecting beneficiaries to the benefactors which would be used to curb hunger. 
                                    </p>
                                </div>
                            </div>
                        </div>  

                        <div className="carousel-item">
                            <div className="card text-white">
                                <img src={ carousel2 } className="card-img d-block w-100" alt="hunger" style={{height: "600px"}} />
                                <div className="card-img-overlay">
                                    <h1 className="card-title mb-4 ms-4"><img src={ foodbank } style={{height: "100px"}} alt="logo" /></h1>
                                    <h1 className="card-text mb-4 ms-4"><b>Support the course to eradicate hunger.</b></h1>
                                    <p className="card-text mt-3 ms-4 me-4 p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", textAlign: "justify"}}>
                                        Because access to safe food is such a basic human needs, it is the foundation 
                                        for many other industries, with far-reaching consequences when food safety protocols fail. 
                                        This will help improve the global economy as well as overall public health. 
                                        Enough beneficiary is linked today to feed everyone on the planet, but hunger 
                                        is on the rise, and some 821 million people are considered to be “chronically undernourished”. 
                                        What steps are being taken to ensure that everyone in Nigeria receives sufficient food?
                                        The good news is that, FB NG would be connecting beneficiaries to the benefactors which would be used to curb hunger. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="card text-white">
                                <img src={ carousel3 } className="card-img d-block w-100" alt="hunger" style={{height: "600px"}} />
                                <div className="card-img-overlay">
                                    <h1 className="card-title mb-4 ms-4"><img src={ foodbank } style={{height: "100px"}} alt="logo" /></h1>
                                    <h1 className="card-text mb-4 ms-4"><b>Support the course to eradicate hunger.</b></h1>
                                    <p className="card-text mt-3 ms-4 me-4 p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", textAlign: "justify"}}>
                                        Thanks to E-FoodBank NG, the number of people who aren’t getting enough to eat would 
                                        dropped by almost a half with regions such as Central Lagos, North and the east 
                                        making great strides in eradicating extreme hunger. However, that’s against a 
                                        background of the global population rising by nearly two billion.
                                        And now recent trends suggest that the hunger problem persists:
                                        Poor nutrition causes nearly half of deaths in children under five in the region, 
                                        some 3.1 million children per year.
                                        Achieving the 2030 goal of Zero Hunger, in other words ensuring that nobody goes 
                                        hungry wherever they are in the world, remains a major challenge. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button> */}
                </div>
        </div>
     );
}
 
export default Carousel;