import * as Scroll from 'react-scroll'

const scroller = Scroll.scroller

export const scrollTo = (element) => {
  scroller.scrollTo(element, {
    duration: 1000,
    delay: 50,
    smooth: true,
    offset: -150,
  })
}
