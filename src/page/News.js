import Nav from "../component/Nav";

const News = () => {
  return (
    <div>
      <Nav />
      <div className="flex bg-pink-300 w-full h-screen ">
        <div className="flex bg-blue-400 w-[78rem] h-[20rem] justify-center mx-auto">
          <p>News</p>
        </div>
      </div>
    </div>
  );
};
export default News;
