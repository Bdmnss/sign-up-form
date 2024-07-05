import Title from "./components/Title";
import Form from "./components/Form";

function App() {
  return (
    <main
      className="flex justify-center min-h-screen min-w-screen bg-mobile-hero-image bg-no-repeat
      bg-[#ff7979] bg-cover lg:bg-desktop-hero-image"
    >
      <div
        className="flex flex-col justify-center items-center min-h-[100vh] w-[75%] lg:flex-row
      lg:gap-[3rem] 2xl:gap-[5rem]"
      >
        <Title />
        <Form />
      </div>
    </main>
  );
}

export default App;
