import Image from 'next/image';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import styles from '../styles/Banner.module.css';

interface BannerProps {
  imgUrl?: string | null;
  description: RichTextBlock[];
}

export const Banner: React.FC<BannerProps> = ({ imgUrl, description }) => {
  return (
    <>
      {imgUrl && (
        <div className={styles['banner-container']}>
          <Image
            src={imgUrl}
            layout="fill"
            objectFit="cover"
            alt="Site banner"
          />
          <div className={styles['banner-content-container']}>
            <RichText render={description} />
          </div>
        </div>
      )}
    </>
  );
};
