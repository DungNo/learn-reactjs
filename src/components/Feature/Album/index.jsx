import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/index';

AlbumSong.propTypes = {
    
};

function AlbumSong(props) {
    const albumList = [
        {
            id: 1,
            title: 'Catchy Tune',
            description: 'Dễ nghe dễ nhớ, bắt tai gây nghiện từ lần đầu tiên',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/f/e/8/4/fe8429071b4909baf803dfb9c6e233a3.jpg'
        },
        {
            id: 1,
            title: 'Sing Along V-Pop',
            description: 'Luôn là lựa chọn hàng đầu trong các buổi Karaoke cùng bạn bè',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/a/1/e/6/a1e60b44c4d57f186f9f2ba80b3f2307.jpg'
        },
        {
            id: 1,
            title: 'Everyday Favorites',
            description: 'Enjoy cả ngày với những bản Hits nghe không biết chán là gì',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/5/1/8/d/518d513f6b09fce0c39f48c1dfc93707.jpg'
        },
        {
            id: 1,
            title: 'Nhạc Phim Hàn Mới Nhất',
            description: 'Từ nhạc phim A Business Proposal cho tới Twenty-Five',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/d/9/2/9d9294b93a707f835477b5c5bcec87e8.jpg'
        },
        {
            id: 1,
            title: 'V-Pop: Hits Quốc Dân',
            description: 'Những bản Hit V-Pop của mọi nhà',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/5/e/a/35ea1e455f501bf53f6639df4d213ce3.jpg'
        }
    ]
    return (
        <div className='container'>
            <h2>Lựa Chọn Hôm Nay</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumSong;