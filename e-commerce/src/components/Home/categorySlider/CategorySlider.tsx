
import CommonSlider from "@/components/shared/CommonSlider/CommonSlider"
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle"
import { ICategory } from "@/interfaces/category.interface"
import { getCategories } from "@/services/category.service"

export default async function CategorySlider() {


  const  categoryOptipns={breakpoints:{
        500:{
           slidesPerView: 1,
            spaceBetween: 20,
        },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1200:{
            slidesPerView: 6,
            spaceBetween: 50,
          }
        }
      }


   const categories = await getCategories()
   console.log(categories)

   const slides = categories.map((slide:ICategory)=>{
       return {
        src:slide.image,
        label:slide.name
       }
   })

  return (
    <div className="md:w-[90%] my-5 mx-auto">
        <SectionTitle sectionTitle={'Browse By Category'}/>
        <CommonSlider slides={slides} swiperOptions={categoryOptipns} variant="category"/>
    </div>
  )
}
