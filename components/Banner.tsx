type Props = {}

function Banner({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Sam Wynne: Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#ffbbbb]">
            your
          </span>{" "}
          new favorite blog
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Book Reviews | Technology | Health & Fitness
      </p>
    </div>
  )
}

export default Banner