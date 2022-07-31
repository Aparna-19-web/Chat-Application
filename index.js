
import data from "react-dom"
import Card from "./Card"

function App()
{
    return(
        <div>
       
        <Card name="Ganesh" url="https://cdn.icon-icons.com/icons2/2468/PNG/128/user_kids_avatar_icon_149311.png" message="Welcome" time="2 min send"/>
        <Card name="Gauri" url="https://cdn.icon-icons.com/icons2/2468/PNG/128/user_kids_avatar_icon_149313.png" message="How are you?" time="1 min send"/>
        <Card name="Reva" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVxCwLv-3ZRmyfHFwyrCDHn6dRWOUN_xk1wbBFE0RFELwgoneK9L06hkVdamZoJme0tE&usqp=CAU" message="Hello Friends" time="2 min send"/>
        
        
        </div>
    )
}
data.render(<App/>, document.getElementById("root"))