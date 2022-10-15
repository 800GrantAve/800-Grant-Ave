import { Gallery } from 'react-grid-gallery'

const IMAGES = [
    {
       src: require('../../images/store/part1.jpg'),
       width: 300,
       height: 300,
       caption: "Shing Ching Store",
    },
    {
       src: require('../../images/store/sign-0001.jpg'),
       width: 300,
       height: 300,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
 
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       width: 320,
       height: 212,
    },
 ];
 
 const StoreImages = () => {
    return (
        <Gallery 
            images={IMAGES}
        />
    )
 }

 export default StoreImages