import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Product } from '../../@types/product'
import useGlobalContext from '../../contexts/GlobalContext'
import ProductCard from '../ProductCard'
import SliderHeaderBrand from '../SliderHeaderBrand'
import { Container } from './styles'

type ConverseOfferContainerProps = {
  converseOfferProducts: Product[]
}

export default function ConverseOfferContainer({
  converseOfferProducts,
}: ConverseOfferContainerProps) {
  const { nextSlide, prevSlide } = useGlobalContext()
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  })

  function handleNextSlide() {
    nextSlide(instanceRef)
  }

  function handlePreviousSlide() {
    prevSlide(instanceRef)
  }

  return (
    <Container>
      <SliderHeaderBrand
        href="/converse"
        handlePreviousSlide={handlePreviousSlide}
        handleNextSlide={handleNextSlide}
      >
        CONVERSE
      </SliderHeaderBrand>

      <div ref={sliderRef} className="keen-slider">
        <section className="keen-slider__slide">
          {converseOfferProducts.slice(5).map((product) => {
            return (
              <ProductCard
                id={product.id}
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                promotion={product.promotion}
              />
            )
          })}
        </section>

        <section className="keen-slider__slide">
          {converseOfferProducts.slice(0, 5).map((product) => {
            return (
              <ProductCard
                id={product.id}
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                promotion={product.promotion}
              />
            )
          })}
        </section>
      </div>
    </Container>
  )
}
