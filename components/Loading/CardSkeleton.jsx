"use client"
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = () => {

  return (
     <div className="md:p-4 lg:p-7 p-3 border border-grayshade-50 dark:border-grayshade-300 rounded-xl dark:bg-grayshade-500 w-full justify-center justify-items-center justify-self-center">
      {/* Ürün görseli */}
      <Skeleton baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7" />

      {/* Başlık */}
      <div className="w-full">
        <Skeleton baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)"  height={20} className="mb-2" />
      </div>

      {/* Price + Button */}
      <div className="flex justify-between items-center w-full">
        <div>
          <Skeleton baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)"  width={40} height={12} className="mb-1" /> {/* Price label */}
          <Skeleton baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)"  width={80} height={20} /> {/* Price */}
        </div>
        <div>
          <Skeleton baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)"  width={100} height={32} borderRadius={8} /> {/* Add to Cart */}
        </div>
      </div>
    </div>
  )
}

export default CardSkeleton