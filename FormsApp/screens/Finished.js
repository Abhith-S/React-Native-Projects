import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'


const Finished = () => {

    const subject = useSelector((state)=>state.dropDownForm.subject)
    const style = useSelector((state)=>state.dropDownForm.style)
    const medium = useSelector((state)=>state.dropDownForm.medium)
    const material = useSelector((state)=>state.dropDownForm.material)
    const quality = useSelector((state)=>state.dropDownForm.quality)
    const original = useSelector((state)=>state.dropDownForm.original)
    const size = useSelector((state)=>state.dropDownForm.size)
    const colors = useSelector((state)=>state.dropDownForm.colors)
    const orientation = useSelector((state)=>state.dropDownForm.orientation)


    console.log(subject)
    console.log(style)
    console.log(medium)
    console.log(material)
    console.log(quality)
    console.log(original)
    console.log(size)
    console.log(colors)
    console.log(orientation)


  return (
    <View><Text>subject</Text></View>
  )
}

export default Finished