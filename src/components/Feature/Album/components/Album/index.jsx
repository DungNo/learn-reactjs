import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album(props) {
    const {album} = props;
    return (
        <div className='album'>
            <div className='album_thumbnail'>
                <img src={album.thumbnailUrl} alt={album.title} />
            </div>
            <p className='album_title'>{album.title}</p>
            <p className='album_desc'>{album.description}</p>
        </div>
    );
}

export default Album;