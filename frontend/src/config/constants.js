import Swal from "sweetalert2"
import jwt_decode from "jwt-decode";

//export const BASE_URL = "http://localhost:3001"
export const BASE_URL = "https://omega-pet-shop-u19-team15.herokuapp.com"


export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const payload = jwt_decode(localStorage.getItem("token"))