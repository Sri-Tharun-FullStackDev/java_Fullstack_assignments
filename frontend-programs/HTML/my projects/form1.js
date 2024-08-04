document.addEventListener('DOMContentLoaded', function () {
   document.getElementById('passportForm').addEventListener('submit', function (event) {
       event.preventDefault();
       login();
   });
});

function login() {
   const formData = new FormData(document.getElementById('passportForm'));
   
   const data = {};
   formData.forEach((value, key) => {
       data[key] = value;
   });

   console.log(data);
}
