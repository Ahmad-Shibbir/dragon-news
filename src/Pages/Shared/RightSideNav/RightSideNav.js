import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaTwitter } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FaGoogle></FaGoogle> Google Login</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Github Login</Button>
            </ButtonGroup>
            <div>
                <h3>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item>Terms and condition</ListGroup.Item>
                </ListGroup>
            </div>
                <BrandCarousel></BrandCarousel>
            <div>

            </div>
        </div>
    );
};

export default RightSideNav;