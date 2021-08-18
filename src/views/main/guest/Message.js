import PageHeader from "../../components/PageHeader";
import AppHeader from "../../layouts/AppHeader";
import BottomNavigation from "../../layouts/BottomNavigation";

const Message = (props) => {
  return (
    <div style={{paddingBottom: '70px'}}>
      <AppHeader />
      <PageHeader title="메시지" />
      <p>메시지는 후순위 작업임</p>
      <BottomNavigation />
    </div>
  );
}

export default Message;