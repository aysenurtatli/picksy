import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const CategorySkeleton = () => {

  return (
    <Skeleton width={209} height={38} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" className='mb-2' />
  )
}

export default CategorySkeleton