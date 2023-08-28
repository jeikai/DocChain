import React, { Fragment } from 'react'

const Layouts = (props) => {
  return (
    <Fragment>
        {<props.children {...props.data} />}
    </Fragment>
  )
}

export default Layouts