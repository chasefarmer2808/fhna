import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/GalleryBannerGrid.module.css';
import { debug } from 'console';

const IMAGE_LIMIT = 4;

interface GalleryBannerGridProps {
  imageUrls: string[];
  bannerMsg?: string;
}

export const GalleryBannerGrid: React.FC<GalleryBannerGridProps> = ({
  imageUrls,
  bannerMsg,
}) => {
  const [firstImg, setFirstImg] = useState<string | undefined>();
  const [secondImg, setSecondImg] = useState<string | undefined>();
  const [thirdImg, setThirdImg] = useState<string | undefined>();
  const [fourthImg, setFourthImg] = useState<string | undefined>();
  const [opacities, setOpacities] = useState<number[]>([0, 0, 0, 0]);
  const [images, setImages] = useState<string[]>(imageUrls);
  const hiddenImages = useRef<string[]>([]);
  const swapIndex = useRef(0);

  useEffect(() => {
    setFirstImg(imageUrls.at(0));
    setSecondImg(imageUrls.at(1));
    setThirdImg(imageUrls.at(2));
    setFourthImg(imageUrls.at(3));

    imageUrls.forEach((url, index) => {
      if (index > 3) {
        hiddenImages.current.push(url);
      }
    });

    // setOpacities(images.map(() => 0));
  }, [imageUrls]);

  useEffect(() => {
    // Don't need to do anything if there are no hidden images to promote.
    if (imageUrls.length < 4) {
      return;
    }

    const interval = setInterval(() => {
      switch (swapIndex.current) {
        case 0: {
          if (!firstImg) return;

          const promotedImg = swapNextHiddenImage(firstImg);
          setFirstImg(promotedImg);
          break;
        }
        case 1: {
          if (!secondImg) return;
          const promotedImg = swapNextHiddenImage(secondImg);
          setSecondImg(promotedImg);
          break;
        }
        case 2: {
          if (!thirdImg) return;
          const promotedImg = swapNextHiddenImage(thirdImg);
          setThirdImg(promotedImg);
          break;
        }
        case 3: {
          if (!fourthImg) return;
          const promotedImg = swapNextHiddenImage(fourthImg);
          setFourthImg(promotedImg);
          break;
        }
        default:
          break;
      }
      swapIndex.current = (swapIndex.current + 1) % IMAGE_LIMIT;
    }, 4000);

    return () => clearInterval(interval);
  }, [imageUrls, firstImg, secondImg, thirdImg, fourthImg]);

  const swapNextHiddenImage = (demotedImage: string): string | undefined => {
    if (hiddenImages.current.length === 0) return;

    const promotedImg = hiddenImages.current.at(0);
    hiddenImages.current.splice(0, 1);
    hiddenImages.current.push(demotedImage);
    return promotedImg;
  };

  return (
    <>
      <div className={styles['banner-container']}>
        <Image
          src={images[0]}
          layout="fill"
          objectFit="cover"
          alt="Site banner"
        />
      </div>
      <div className={styles['grid-container']}>
        {firstImg && (
          <div
            className={styles['grid-item']}
            style={{
              gridColumn: '1 / 3',
              opacity: opacities[0],
            }}
          >
            <Image
              src={firstImg}
              layout="fill"
              objectFit="cover"
              alt="Site banner"
              onLoad={() =>
                setTimeout(() => {
                  setOpacities((ops) => {
                    const temp = [...ops];
                    temp[0] = 1;
                    return temp;
                  });
                }, 0)
              }
            />
          </div>
        )}
        {secondImg && (
          <div
            className={styles['grid-item']}
            style={{
              gridColumn: '3 / 6',
              opacity: opacities[1],
            }}
          >
            <Image
              src={secondImg}
              layout="fill"
              objectFit="cover"
              alt="Site banner"
              onLoad={() =>
                setTimeout(() => {
                  setOpacities((ops) => {
                    const temp = [...ops];
                    temp[1] = 1;
                    return temp;
                  });
                }, 200)
              }
            />
          </div>
        )}
        {thirdImg && (
          <div
            className={styles['grid-item']}
            style={{
              gridColumn: '1 / 4',
              opacity: opacities[2],
            }}
          >
            <Image
              src={thirdImg}
              layout="fill"
              objectFit="cover"
              alt="Site banner"
              onLoad={() =>
                setTimeout(() => {
                  setOpacities((ops) => {
                    const temp = [...ops];
                    temp[2] = 1;
                    return temp;
                  });
                }, 300)
              }
            />
          </div>
        )}
        {fourthImg && (
          <div
            className={styles['grid-item']}
            style={{
              gridColumn: '4 / 6',
              opacity: opacities[3],
            }}
          >
            <Image
              src={fourthImg}
              layout="fill"
              objectFit="cover"
              alt="Site banner"
              onLoad={() =>
                setTimeout(() => {
                  setOpacities((ops) => {
                    const temp = [...ops];
                    temp[3] = 1;
                    return temp;
                  });
                }, 400)
              }
            />
          </div>
        )}
      </div>
    </>
  );
};
