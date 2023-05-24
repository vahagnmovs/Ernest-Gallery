import React from 'react';
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import {AdvancedImage} from "@cloudinary/react";
const myImage = new CloudinaryImage('sample', {cloudName: 'dv6xvdavg'}).resize(fill().width(100).height(150));

const ImageGallery = () => {
    return (
        <div>
            <AdvancedImage cldImg={myImage} />
        </div>
    );
};

export default ImageGallery;