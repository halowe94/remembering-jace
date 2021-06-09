import React from "react";

function About() {
    return (
        <div className ="about">
            <div class='container'>
                <div class='row align-items-center my-5'>
                    <div class='col-lg-7'>
                        <img 
                             class="img-fluid rounded mb-4 mb-lg-0"
                             src="http://placehold.it/900x400"
                             alt=""
                        />
                    </div>
                    <div clas='col-lg-5'>
                        <h1 class='font-weight-light'>About</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia earum assumenda modi laborum sit aliquid fugit esse, molestiae, officiis sapiente doloribus magnam rerum dolorum omnis, natus magni? Eius rerum perferendis reprehenderit earum natus repellendus exercitationem quas vero dignissimos pariatur quis similique, dolores fugit ipsa tempora, cum nostrum commodi illo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;