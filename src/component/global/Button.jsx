import React from 'react'

const Button = ({
  Tagname = "button",
  children,
  className = "",
  ...props
}) => {
  return (
    <Tagname
      {...props}
      className={`bg-white rounded-sm border border-[#285A43] text-[#285A43] hover:text-white px-6 py-2 text-lg font-medium hover:bg-[#285A43] ${className}`}
    >
      {children}
    </Tagname>
  )
}

export default Button