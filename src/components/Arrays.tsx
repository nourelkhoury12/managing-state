import { useState } from "react"

const Arrays = () => {

    const [ tags, setTags ] = useState(['happy', 'cheerful']);

    const handleClick = () => {
        //Add 
        //setTags([...tags, 'existing']);

        //Remove
       //setTags(tags.filter(tag => tag !== 'happy'));

        //Update
       setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
    }

    return (
        <div>
            {tags}
            <button type="button" onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Arrays
