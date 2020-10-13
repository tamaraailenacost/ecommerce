import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Hits extends Component {
    render() {
        return (
            <div id="carouselExAdminProIndicators2" class="carousel slide"
                data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExAdminProIndicators2" data-slide-to="0"
                            class="active"></li>
                        <li data-target="#carouselExAdminProIndicators2" data-slide-to="1"></li>
                        <li data-target="#carouselExAdminProIndicators2" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img class="img-fluid" src="../assets/images/gallery/image3.jpg"
                                alt="First slide"></img>
                            <div class="carousel-caption d-none d-md-block">
                               <Button>Intro</Button>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <img class="img-fluid" src="../assets/images/gallery/image2.jpg"
                            alt="Second slide"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <Button>Intro</Button>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <img class="img-fluid" src="../assets/images/gallery/image1.jpg"
                            alt="Third slide"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <Button>Intro</Button>
                        </div>

                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExAdminProIndicators2"
                    role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExAdminProIndicators2"
                    role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            
        );
    }
}

export default Hits;