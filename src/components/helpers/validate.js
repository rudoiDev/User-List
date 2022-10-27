export const emailHandle = (e) => {
  const input = e.target
  const valid = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
  if (valid.test(input.value)) {
    input.classList.remove('is-invalid')
    input.classList.add('is-valid')
    return true
  } else if (input.value == '') {
    input.classList.remove('is-valid', 'is-invalid')
    return true
  } else {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
    return false
  }
} // валидация email

export const textHandle = (e) => {
  const input = e.target
  if (input.value == 0) {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
  } else {
    input.classList.remove('is-invalid')
    input.classList.add('is-valid')
  }
} // валидация текстовых полей

export const alertError = (setAlert, errorAlert) => {
  setAlert(true)
  const formElems = document.querySelectorAll('.form-control')
  formElems.forEach((el) => {
    if (!el.matches('.is-valid')) {
      el.classList.add('is-invalid')
    }
  })
  errorAlert.current?.classList.remove('animate__fadeOutUp')
  errorAlert.current?.classList.add('animate__fadeInDown')
  setTimeout(() => {
    errorAlert.current?.classList.remove('animate__fadeInDown')
    errorAlert.current?.classList.add('animate__fadeOutUp')
  }, 5000)
} // условие ошибки
