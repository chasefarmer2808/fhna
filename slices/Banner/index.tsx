import React from 'react'
import { SliceFC } from '../types'

interface BannerProps {
  title: string;
  description: string;
  background: string;
}

export const Banner: SliceFC<BannerProps> = ({ sliceData }) => {
  const { title, description, background } = sliceData;

  return (
    <section className="homepage-banner">
      <div className="banner-content container">
        <h2 className="banner-title">{title}</h2>
        <div className="banner-description">
          {description}
        </div>
      </div>
    </section>
  )
}

export default Banner