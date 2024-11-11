export default function NoPage() {
  return (
    <div className="page pt-10 text-center flex flex-col gap-6 items-center justify-center">
      <h1 className="text-4xl text-red-700 font-bold">404 Page Not Found</h1>
      <p className="text-2xl">The page you are looking for doesnot exist.</p>
      <a
        href="/"
        className=" bg-sky-700 w-max self-center p-3 px-20 rounded-lg text-white text-xl"
      >
        Go back
      </a>
    </div>
  );
}
