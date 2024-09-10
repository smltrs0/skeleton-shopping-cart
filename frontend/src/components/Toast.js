import Swal from "sweetalert2";

const Toast = Swal.mixin({
	toast: true,
	position: "bottom-right",
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: false,
	didOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});

export default Toast;
