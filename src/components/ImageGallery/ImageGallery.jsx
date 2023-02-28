import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.scss';

const ImageGallery = ({ items, showImage }) => {
  const elements = items.map(({ id, ...props }) => (
    <ImageGalleryItem showImage={showImage} key={id} {...props} />
  ));
  return <ul className={styles.imageGallery}>{elements}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
