import Image from 'next/image'
import { Container } from './styles'

export default function BannerDiversity() {
  return (
    <Container>
      <picture>
        <source media="(min-width: 960px)" srcSet="/media/banner-diversity-desktop.png" />
        <source media="(min-width: 600px)" srcSet="/media/banner-diversity-tablet.png" />
        <source srcSet="/media/banner-diversity-mobile.png" />
        <Image src="/media/banner-diversity-desktop.png" alt="" fill />
      </picture>
    </Container>
  )
}
