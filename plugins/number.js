import { replaceAll } from '~/util/string/replaceAll'

/* eslint-disable */
export default (context, inject) => {

  // 천단위 콤마
  const comma = (x) => {
    if (isNaN(x)) { return '' }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  inject('comma', comma)

  // 앞에 +/- 추가된 숫자
  const pm_comma = (x) => {
    if (isNaN(x)) { return '' }
    if (x > 0) {
      return `+${comma(x)}`
    }
    return comma(x)
  }
  inject('pm_comma', pm_comma)

  // 앞에 ▲/▼ 추가된 숫자
  const ud_comma = (x) => {
    if (isNaN(x)) { return '' }
    if (x > 0) {
      return `▲ ${comma(x)}`
    }
    if (x < 0) {
      return `▼ ${replaceAll(comma(x), '-', '')}`
    }
    return comma(x)
  }
  inject('ud_comma', ud_comma)

  // 값에 따라 up, dn 클래스 리턴
  const ud_class = (x) => {
    if (isNaN(x)) { return '' }
    if (x > 0) {
      return 'up'
    }
    if (x < 0) {
      return 'dn'
    }
    return ''
  }
  inject('ud_class', ud_class)

}
