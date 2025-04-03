function a() {
    alert('Error 404')
    setTimeout(a, 1000);
  }
  
  setTimeout(a, 5000);