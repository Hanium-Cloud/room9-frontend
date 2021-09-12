import BottomNavigation from "../../layouts/BottomNavigation";
import AppHeader from "../../layouts/AppHeader";


const HostMessage = (props) => {

  return (
    <div>
      <AppHeader />
      <div>
        Hello this is Host Message
      </div>
      <BottomNavigation />
    </div>
  )
}

export default HostMessage;