import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/GalleryBannerGrid.module.css';

interface GalleryBannerGridProps {
  imageUrls: string[];
  bannerMsg?: string;
}

export const GalleryBannerGrid: React.FC<GalleryBannerGridProps> = ({
  imageUrls,
  bannerMsg,
}) => {
  const [opacities, setOpacities] = useState<number[]>([]);

  useEffect(() => {
    setOpacities(imageUrls.map(() => 0));
  }, [imageUrls]);

  const imgCount = 4;

  const getGridItemColSpan = (itemNum: number) => {
    switch (itemNum) {
      case 0:
        return '1 / 3';
      case 1:
        return '3 / 6';
      case 2:
        return '1 / 4';
      case 3:
        return '4 / 6';
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles['banner-container']}>
        <Image
          src={imageUrls[0]}
          layout="fill"
          objectFit="cover"
          alt="Site banner"
        />
      </div>
      <div className={styles['grid-container']}>
        {imageUrls.map((url, index) => (
          <div
            key={url}
            className={styles['grid-item']}
            style={{
              gridColumn: getGridItemColSpan(index),
              opacity: opacities[index],
            }}
          >
            <Image
              src={url}
              layout="fill"
              objectFit="cover"
              alt="Site banner"
              onLoad={() =>
                setTimeout(() => {
                  setOpacities((ops) => {
                    const temp = [...ops];
                    temp[index] = 1;
                    return temp;
                  });
                }, 200 * index)
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};
