import React from "react"
import ReactDOM from "react-dom"
import "./reset.css"
import "./index.css"

const magazinesData = [
  {
    id: 1,
    image: "https://i1.feedspot.com/200/4918930.jpg?t=1616506424",
    title: "Men's Health",
  },

]

const MagazinesList = () => {
  return(
    <section className="magazinelist">
      {magazinesData.map((magazineData) => {
        return(
          <section>
            <Magazines
              key={magazineData.id}
              magazineData = {magazineData}
            >
            </Magazines>
          </section>
        )
      })}
    </section>
  )
}

const Magazines = (props) => {

  const { image, title } = props.magazineData

  return(
    <section className="magazines">
      <img src={image} alt="" />

      <h3 className="magazinetitle">{title}</h3>

    </section>
  )
}

ReactDOM.render(<MagazinesList/>, document.getElementById("root"))