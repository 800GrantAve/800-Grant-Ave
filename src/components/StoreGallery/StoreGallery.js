import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: require('../../images/store/sign-0001.jpg'),
    thumbnail: require('../../images/store/sign-0001.jpg'),
    originalHeight: 650
  },
  {
    original: require('../../images/store/according.jpeg'),
    thumbnail: require('../../images/store/according.jpeg'),
    originalHeight: 650
  },
  {
    original: require('../../images/store/louie.jpg'),
    thumbnail: require('../../images/store/louie.jpg'),
    originalHeight: 650
  },
  {
    original: require('../../images/store/clay_st.jpg'),
    thumbnail: require('../../images/store/clay_st.jpg'),
    originalHeight: 650
  },
  {
    original: require('../../images/store/clayst.jpg'),
    thumbnail: require('../../images/store/clayst.jpg'),
    originalHeight: 650
  },
  {
    original: require('../../images/store/claycar.jpg'),
    thumbnail: require('../../images/store/claycar.jpg'),
    originalHeight: 650
  },
];

const StoreGallery = () => {
    return (
    <ImageGallery items={images} />
    )
}

export default StoreGallery
