import Swal from 'sweetalert2'


export function errorAlert(message:string,title:string)  {
    Swal.fire({
        title: title,
        text: message,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}
export function successAlert(message:string,title:string) {
    Swal.fire({
        title:title,
        text: message,
        icon: 'success',
        confirmButtonText: 'ok'
      })
}
