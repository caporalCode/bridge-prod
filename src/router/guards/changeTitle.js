export default  ((to, from, next) => {
   if(to.meta.title){
    document.title = `${process.env.VUE_APP_TITLE} - ${to.meta.title}`
   }
  next()
  })