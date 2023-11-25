import Accordion from "../components/Accordion";

const HomePage = () => {
  const list = ["제목 1입니다.", "제목 2입니다.", "제목 3입니다."];
  return (
    <main className="flex justify-center items-center h-full">
      <div className="">
        {list.map((item, index) => (
          <Accordion title={item} key={index}>
            <div>{item} 내용이다</div>
          </Accordion>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
