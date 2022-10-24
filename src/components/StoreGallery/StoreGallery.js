import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: require('../../images/store/sign-0001.jpg'),
    thumbnail: require('../../images/store/sign-0001.jpg'),
    description: 'description here',
    originalTitle: 'Shing Chong Store'
  },
  {
    original: require('../../images/store/louie.jpg'),
    thumbnail: require('../../images/store/louie.jpg'),
    description: 'According to records, Louie Wee Lee came to America about 1900. He lsited himself as the son of a merchannt for a store named Bow Kee & Co. he returned to China, married and had a son, then returned alone in 1906',
  },
  {
    original: require('../../images/store/clay_st.jpg'),
    thumbnail: require('../../images/store/clay_st.jpg'),
  },
  {
    original: require('../../images/store/clayst.jpg'),
    thumbnail: require('../../images/store/clayst.jpg'),
  },
];

const StoreGallery = () => {
    return (
    <ImageGallery items={images} />
    )
}

export default StoreGallery
