/* eslint-disable react/prop-types */

const Links = ({href,className,id}) => {
  return (
    <div className={className}>
        <a href={href}>{id}</a>
    </div>
  )
}

export default Links