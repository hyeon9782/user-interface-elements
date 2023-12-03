import useToast from "../hooks/useToast";

const HomePage = () => {
  const { openToast } = useToast();
  return (
    <main className="h-[calc(100%-44px)] ">
      <button onClick={openToast}>Toast Button</button>
    </main>
  );
};

export default HomePage;
