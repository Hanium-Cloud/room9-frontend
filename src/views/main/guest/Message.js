import PageHeader from "../../components/PageHeader";
import AppHeader from "../../layouts/AppHeader";

const Message = (props) => {
  return (
    <>
      <AppHeader />
      <PageHeader title="메시지" />
      <p>메시지는 후순위 작업임</p>
    </>
  );
}

export default Message;