export default function OurStory() {
  return (
    <div className="bg-slate-50">
      <div className="grid place-items-center w-full m-auto gap-16 lg:w-[1200px] justify-center items-center py-16">
        <h1 className="text-3xl text-center font-bold">Our Story</h1>
        <div className="flex flex-col gap-4">
          <p>
            Snapifies was born from a simple frustration: screenshots are
            powerful, but managing them is chaotic. We set out to change that —
            with a Chrome extension and dashboard that keep your visuals updated
            automatically, always in sync with the latest state of your product.
          </p>
          <p>
            What started as a tool to help our own dev team monitor UI changes
            quickly evolved into a product used by solo makers, small startups,
            and agile QA teams who care about design integrity and development
            speed.
          </p>
        </div>
      </div>
    </div>
  );
}
