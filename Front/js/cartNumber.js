function cartNumber() {

    let contentCart = JSON.parse(localStorage.getItem('teddy'))
  
      if (contentCart !== null){
        nb = contentCart.length;
        document.querySelector('.badge').innerHTML += `${nb}`;
      } else {
        document.querySelector('.badge').innerHTML += 0;
      }
  }

cartNumber()