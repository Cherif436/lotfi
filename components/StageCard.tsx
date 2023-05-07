import { FunctionComponent } from "react"
import { IStage } from "../type"

const StageCard:FunctionComponent<{stage:IStage}> = ({stage:{Icon, about, title, school, ville, date}}) => {
  const createMarkup = () => {
    return { 
      __html:about
     }
  }

  return (
    <div className="flex p-2 space-x-4">
      {/* <img src="/images/Bkatech.png" className="mx-auto bg-white border" height={40} width={100} /> */}
      <div className="container">
        <h4 className="font-bold">{title}</h4>
        <h4 className="font-bold">{school}, {ville} ({date})</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default StageCard
