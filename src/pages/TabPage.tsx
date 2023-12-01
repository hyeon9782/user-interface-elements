import Tabs from "../components/tab/Tabs";

const TabPage = () => {
  const tabs = [
    { label: "Tab 1", content: <div>Tab 1 내용</div> },
    { label: "Tab 2", content: <div>Tab 2 내용</div> },
    { label: "Tab 3", content: <div>Tab 3 내용</div> },
  ];
  return (
    <main>
      <Tabs tabs={tabs} />
    </main>
  );
};

export default TabPage;
