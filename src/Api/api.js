


  export const FetchProducts= async({dispatch})=>{
      const url="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      try{
       const responese= await fetch(url)
       const products_data =  await responese.json()
        dispatch({
         type:'ADD_PRODUCTS',
         payload:products_data
        })
      }
      catch(error){
        console.log(error.message)
      }
  }
