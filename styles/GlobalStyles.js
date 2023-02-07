import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
h1,h2,h3,span{
font-family: 'Ubuntu', sans-serif;
font-weight: 700;
}

body{
font-family: Roboto, sans-serif;
background: #F1F6FF;
color: #646464;
}

p{
font-size: 16px;
line-height: 1.75;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

html{
  scroll-behavior:smooth;
}

.swiper--hero .swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
}
/* Dos veces por que no lo reconoce uno el color */
.swiper--hero .swiper-button-next::after {
  color: #fff;
}

.swiper--hero {
  margin: 0;
  height: 30rem;
  padding-top: 3rem;
  padding-bottom: 6rem;
  display: none;
}

@media (min-width: 640px) {
  .swiper--hero {
    display: block;
  }
}

.swiper--hero .swiper-button-prev,
.swiper-button-next {
  top: initial;
  bottom: 0;
  border: 2px solid #fff;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

/*Dos veces por que no lo reconoce uno*/
.swiper--hero .swiper-button-next {
  left: 6rem;
  right: initial;
  border: 2px solid #fff;
}

.swiper--uni-cisternas,
.swiper--agua-potable {
  margin: 0;
  padding-bottom: 6rem;

}

.swiper--uni-cisternas .swiper-button-prev,
.swiper-button-next {
  top: initial;
  bottom: 0;
  border: 2px solid #1c77c3;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.swiper--uni-cisternas .swiper-button-prev::after,
.swiper-button-next::after {
  color: #1c77c3;
  font-size: 1.6rem;
  font-weight: 700;
}

.swiper--uni-cisternas .swiper-button-prev {
  left: initial;
  right: 6rem;
}

.swiper--agua-potable .swiper-button-prev,
.swiper-button-next {
  top: initial;
  bottom: 0;
  border: 2px solid #1c77c3;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.swiper--agua-potable .swiper-button-prev::after,
.swiper-button-next::after {
  color: #1c77c3;
  font-size: 1.6rem;
  font-weight: 700;
}

.swiper--agua-potable .swiper-button-prev {
  left: initial;
  right: 6rem;
}

//Modernas Cisternas
.cisterna-one,.cisterna-two,.cisterna-three{
  position:relative;
  filter: drop-shadow(0px 10px 100px #AEC8F2)
}

.cisterna-one {
  grid-column: 2 / 3;
  grid-row: 1;

}

.cisterna-two{
  grid-column: 1 / 2;
  grid-row: 2;

}

.cisterna-three{
  grid-column: 3 / 4;
  grid-row: 2;
}
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
