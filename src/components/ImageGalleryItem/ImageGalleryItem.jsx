import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, showImage }) => {
  return (
    <li
      onClick={() => {
        showImage(largeImageURL);
      }}
      className={styles.imageGalleryItem}
    >
      <img
        className={styles.galleryImage}
        src={webformatURL}
        alt={tags}
        title=""
      />
    </li>
  );
};

export default ImageGalleryItem;
