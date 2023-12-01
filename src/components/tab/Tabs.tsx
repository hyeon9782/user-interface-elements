import { ReactNode, useState } from "react";

type TabProps = {
  label: string;
  content: ReactNode;
};

const Tabs = ({ tabs }: { tabs: TabProps[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setActiveTab(index)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
