import React from 'react'
import { create } from 'zustand'
interface imageState{
    featured : string,
    changeFeatured: (newImage:string) => void
}
const useStore = create<imageState>()((set) => ({
        featured: "",
        changeFeatured: (newImage) => set(() =>({featured:newImage})),
}))
const Thumb = ({}) => {
  return (
    <div>Thumb</div>
  )
}

export default Thumb