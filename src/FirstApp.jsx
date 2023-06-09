import  PropTypes  from "prop-types"

function FirstApp({titles,subtitles}) {


  return (
    <>
    <h1>{ titles }</h1>
    <p>{subtitles + 1}</p>
    </>
  )
}

// FirstApp.PropTypes ={
//     titles: PropTypes.string.isRequired
// }

// FirstApp.defaultProps = {
//     titles:"no hay nada perri",
//     subtitles:"no hay nada"
// }


export default FirstApp