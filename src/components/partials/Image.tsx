import { useState } from 'react';
import { Skeleton, Image, ImageProps } from '@chakra-ui/react'

export default function ImageWithSkeleton(props: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Skeleton display="flex" isLoaded={isLoaded}>
      <Image
        {...props}
        onLoad={() => setIsLoaded(true)}
      />
    </Skeleton>
  )
}