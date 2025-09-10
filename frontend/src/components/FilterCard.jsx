import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData=[
{
    filterType:"Location",
    array:["Delhi NCR", "Banglore","Hyderabad","Pune","Mumbai"]
},
{
    filterType:"Industry",
    array:["Frontend Developer", "Backend Developer","FullStack Developer"]
},
{
    filterType:"Salary",
    array:["0-40k", "42-1Lakh","1Lakh to 5Lakh",]
},
]
const FilterCard = () => {
    const [selectedValue,setSelectedValue]=useState('');
    const dispatch=useDispatch();
    const ChangeHandler=(value)=>{
        setSelectedValue(value);
    }

   useEffect(()=>{
    dispatch(setSearchedQuery(selectedValue))
   },[selectedValue])
  return (
    <div>
     <h1>Filter Jobs</h1>
     <hr className='mt-3' />
     <RadioGroup  value={selectedValue} onValueChange={ChangeHandler}>{
        filterData.map((data,index)=>(
            <div>
                <h1 className='font-bold text-lg'>{data.filterType}</h1>
                {
                    data.array.map((item,idx)=>{
                        const itemId=`r${index}-${idx}`
                        return(
                            <div className='flex items-center space-x-2 my-2'>
<RadioGroupItem value={item} id={itemId}/>
<Label htmlFor={itemId} >{item}</Label>
                            </div>
                        )
                    })
                       
                    
                }
            </div>
        ))
    }
     </RadioGroup>
    </div>
  )

}

export default FilterCard
