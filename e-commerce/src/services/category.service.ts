export async  function getCategories(){

  const response =await  fetch(`https://ecommerce.routemisr.com/api/v1/categories`,{
    cache:'force-cache'
  })
 
  if(!response.ok){
    throw new Error(`${response.status} there is an error`)
  }

  const data =await response.json()

  return  data.data
}