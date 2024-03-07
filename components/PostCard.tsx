import React from 'react'

const PostCard = (props: {title:string, des: string}) => {
  return (
    <div>PostCard

<h1>{props.title}</h1>

<h1>{props.des}</h1>
    </div>
    
  )
}

export default PostCard