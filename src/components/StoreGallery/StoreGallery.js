import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: require('../../images/store/louie.jpg'),
    thumbnail: require('../../images/store/louie.jpg'),
    originalHeight: 550,
    description: 'Description Here'
  },
  {
    original: require('../../images/store/according.jpeg'),
    thumbnail: require('../../images/store/according.jpeg'),
    originalHeight: 550,
  },
  {
    original: require('../../images/store/clay_st.jpg'),
    thumbnail: require('../../images/store/clay_st.jpg'),
    originalHeight: 550
  },
  {
    original: require('../../images/store/clayst.jpg'),
    thumbnail: require('../../images/store/clayst.jpg'),
    originalHeight: 550
  },
  {
    original: require('../../images/store/claycar.jpg'),
    thumbnail: require('../../images/store/claycar.jpg'),
    originalHeight: 550
  },
];

const StoreGallery = () => {
    return (
    <ImageGallery 
      items={images}
      thumbnailPosition={'left'} 
    />
    )
}

export default StoreGallery
