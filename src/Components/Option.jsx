import React from 'react'

const Option = (props) => {
  return (
   
    <div>
        <select className='dropdown' onChange={props.onChange}>
                <option className='dropdown-item text-whiite' style={{backgroundColor: "grey" , color: "white"}} value={'en'}>English</option>
                <option className='dropdown-item' value={'mr'} style={{backgroundColor: "grey" , color: "white"}}>Marathi</option>
                <option className='dropdown-item' value={'hi'} style={{backgroundColor: "grey" , color: "white"}}>Hindi</option>
        </select>
    </div>

  )
}

export default Option
