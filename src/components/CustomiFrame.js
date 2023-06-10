import React, { useState } from 'react'
import { createPortal } from 'react-dom'

const CustomiFrame = ({
  children,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null)

  const mountNode =
    contentRef?.contentWindow?.document?.body

  return (
    <iframe {...props} ref={setContentRef} 
        src="https://calendar.fau.edu/widget/combo?schools=fau&days=60&num=50&target_blank=1&html_descriptions=1&experience=inperson&container=localist-widget-13250798&template=card"
        width={1000}
        height={500}
        style={{ marginLeft: 100, marginRight: 100, display: 'grid', marginTop: 10 }}
        title='Calendar of FAU Events'
        sandbox='allow-scripts allow-modal allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox'
        loading="eager"
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  )
}

  export default CustomiFrame