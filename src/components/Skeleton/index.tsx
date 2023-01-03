import React from 'react'
import ContentLoader from 'react-content-loader'

export default function SkeletonLoader(props) {
  return (
    <ContentLoader
      speed={2}
      width={785}
      height={50}
      viewBox="0 0 785 50"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
      <rect x="-10" y="-33" rx="0" ry="0" width="86" height="116" />
      <rect x="86" y="5" rx="0" ry="0" width="338" height="31" />
      <rect x="461" y="7" rx="0" ry="0" width="106" height="26" />
      <rect x="571" y="14" rx="0" ry="0" width="1" height="7" />
      <rect x="88" y="44" rx="0" ry="0" width="217" height="19" />
    </ContentLoader>
  )
}
