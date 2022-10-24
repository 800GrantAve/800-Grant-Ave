import { Gallery } from 'react-grid-gallery'
import { StoreImgsContainer } from './StoreImagesElements';

const IMAGES = [
    {
       src: require('../../images/store/part1.jpg'),
       width: 600,
       height: 600,
       caption: "Shing Ching Store",
    },
    {
       src: require('../../images/store/sign-0001.jpg'),
       width: 600,
       height: 600,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
 
    {
       src: require('../../images/store/according.jpeg'),
       width: 600,
       height: 600,
    },
 ];

 const StoreImages = () => {
    return (
      <StoreImgsContainer>
        <Gallery 
            images={IMAGES}
            enableImageSelection={false}
            rowHeight='250'
            // enableLightbox={true}
            // backdropClosesModal
        />
      </StoreImgsContainer>

    )
 }

 export default StoreImages