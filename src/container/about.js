import React from 'react';
import { Container, Media  } from 'reactstrap';
import User from '../assets/images/user.jpg';
 
function About() {
  return (
    <Container>
      <h1 class="bd-title  my-3" id="content">About</h1>

      <Media className="my-1">
        <Media left href="#" className="mr-2"> 
          <img src={User}/>
        </Media>
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
    </Media>

    <Media className="my-1">
        <Media left href="#" className="mr-2"> 
          <img src={User}/>
        </Media>
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
    </Media>

    <Media className="my-1">
        <Media left href="#" className="mr-2"> 
          <img src={User}/>
        </Media>
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
    </Media>
    
    </Container> 
  );
}

export default About;