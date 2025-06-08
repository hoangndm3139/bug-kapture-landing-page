export default function UsApart() {
  return (
    <div
      id="about-us"
      className="lg:w-[1200px] w-full m-auto flex justify-center items-center flex-col py-16 gap-16"
    >
      <h1 className="text-3xl text-center font-bold">What Sets Us Apart</h1>
      <div className="grid place-items-center w-full gap-16">
        <div className="flex flex-col gap-8 w-full justify-start items-start">
          <div className="flex flex-col gap-4 w-full">
            <li>
              <b>Live-refreshing screenshots</b> — Your captures always stay
              current.
            </li>
            <li>
              <b>Zero-hassle setup</b> — Capture pages in seconds with our
              Chrome extension.
            </li>
            <li>
              <b>Minimal but powerful dashboard</b> — Organize, compare, and
              revisit your UI over time.
            </li>
            <li>
              <b>Built for speed</b> — No bloated tools, just what you need to
              get clarity fast.
            </li>
          </div>
          <p className="text-start">
            We believe the best tools disappear into your workflow — and
            Snapifies is here to make UI tracking seamless, visual, and even a
            little fun.
          </p>
        </div>
      </div>
    </div>
  );
}
