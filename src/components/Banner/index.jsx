import react from 'react';
import PropTypes from 'prop-types';
import './banner.scss';
import {Container } from 'react-bootstrap';

Banner.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
};

Banner.defaultProps = {
    title: '',
    content: '',
    src: '',
}

function Banner(props) {
    const { title, content, src } = props;

    const bannerStyle = src ? {backgroundImage: 'url(src)'} : {}

    return (
        <section className="banner" style={bannerStyle}>
            <Container>
                <h1 className="banner__title">{title}</h1> 
                <h6 className="banner__content">{content}</h6>
            </Container>
        </section>
    );
}

export default Banner