import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import { CaretLeft, CaretRight } from 'phosphor-react'
import Link from 'next/link'
import { ButtonCaretSlideLeft, ButtonCaretSlideRight, Container } from './styles'
import useGlobalContext from '../../contexts/GlobalContext'

export default function BannerPresentationHome() {
  const { nextSlide, prevSlide } = useGlobalContext()
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: 'snap',
      slides: {
        perView: 1,
      },
    },
    [
      (slider) => {
        let timeout: NodeJS.Timer
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)

          if (mouseOver) return

          timeout = setTimeout(() => {
            slider.next()
          }, 1500)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })

          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })

          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  function handleNextSlide() {
    nextSlide(instanceRef)
  }

  function handlePreviousSlide() {
    prevSlide(instanceRef)
  }

  return (
    <Container ref={sliderRef} className="keen-slider">
      <ButtonCaretSlideLeft onClick={handlePreviousSlide}>
        <CaretLeft size={28} />
      </ButtonCaretSlideLeft>

      <section className="keen-slider__slide">
        <div>
          <span>ENCONTRE</span>
          <strong>
            O PRESENTE <br /> PERFEITO
          </strong>

          <Link href="/converse">VER MAIS</Link>
        </div>

        <Image src="/media/principal-motion-b.jpg" alt="" fill />
      </section>

      <section className="keen-slider__slide">
        <div>
          <span>CONVERSE</span>
          <strong>
            RUN STAR <br /> MOTION
          </strong>

          <Link href="/converse">VER MAIS</Link>
        </div>

        <Image src="/media/principal-motion-a.png" alt="" fill />
      </section>

      <section className="keen-slider__slide">
        <div>
          <span>WEAPON</span>
          <strong>
            O NOVO <br /> CONVERSE
          </strong>

          <Link href="/converse">VER MAIS</Link>
        </div>

        <Image src="/media/principal-motion-c.gif" alt="" fill />
      </section>

      <ButtonCaretSlideRight onClick={handleNextSlide}>
        <CaretRight size={28} />
      </ButtonCaretSlideRight>
    </Container>
  )
}
