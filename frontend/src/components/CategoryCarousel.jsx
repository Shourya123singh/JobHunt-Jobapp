import React from 'react'
import { Carousel, CarouselContent, CarouselNext, CarouselItem,CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const category=[
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]
const CategoryCarousel = () => {
const navigate=useNavigate();
const dispatch=useDispatch();
    const searchJobHandler=(query)=>{
        dispatch(setSearchedQuery(query));
        navigate("/browse")
    }

  return (
   <div className="my-8 flex justify-center">
    <Carousel className="w-full max-w-xl">
        <CarouselContent className="flex justify-center gap-4">
            {category.map((cat, index) => (
                <CarouselItem key={index} className="basis-auto">
                    <Button  onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full px-6 py-2">
                        {cat}
                    </Button>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious/>
      <  CarouselNext/>
    </Carousel>
</div>
  )
}

export default CategoryCarousel
