import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: require('../../images/store/sign-0001.jpg'),
    thumbnail: require('../../images/store/sign-0001.jpg'),
  },
  {
    original: require('../../images/store/sign-0001.jpg'),
    thumbnail: require('../../images/store/sign-0001.jpg'),
  },
  {
    original: require('../../images/store/sign-0001.jpg'),
    thumbnail: require('../../images/store/sign-0001.jpg'),
  },
];

const StoreGallery = () => {
    return (
    <ImageGallery items={images} />
    )
}

export default StoreGallery
