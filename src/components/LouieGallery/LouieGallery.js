import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: require('../../images/louie/LouieWeeLee.jpg'),
    thumbnail: require('../../images/louie/LouieWeeLee.jpg'),
    originalHeight: 650,
  },
  {
    original: require('../../images/louie/affidavit.jpg'),
    thumbnail: require('../../images/louie/affidavit.jpg'),
    originalHeight: 650,
  },
  {
    original: require('../../images/louie/louiefamily1.jpg'),
    thumbnail: require('../../images/louie/louiefamily1.jpg'),
    originalHeight: 650
  },
  {
    original: require('../../images/louie/louiefamily2.jpg'),
    thumbnail: require('../../images/louie/louiefamily2.jpg'),
    originalHeight: 650
  },
  {
    original: require('../../images/louie/louiefamily3.jpg'),
    thumbnail: require('../../images/louie/louiefamily3.jpg'),
    originalHeight: 650
  },
  {
    original: require('../../images/louie/louiefamily4.jpg'),
    thumbnail: require('../../images/louie/louiefamily4.jpg'),
    originalHeight: 650
  },
];

const LouieGallery = () => {
    return (
    <ImageGallery items={images} />
    )
}

export default LouieGallery