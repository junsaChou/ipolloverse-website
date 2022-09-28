export const goBack = (url) =>{
    if( url.indexOf('#')!= -1 ){
      document.querySelector(url).scrollIntoView(true);
      return
    }
    if( url != '' ){
      window.open(url)
      return
    }
  }