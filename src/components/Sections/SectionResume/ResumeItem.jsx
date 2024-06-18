import { resumeSrc } from "./resumeData";
function ResumeItem() {
  return (
    <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
      {resumeSrc.map(({ id, icon, des }) => (
        <div className="flex items-start gap-4" key={id}>
          <div
            className="relative flex flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
            dangerouslySetInnerHTML={{ __html: icon }}
          ></div>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
            {des}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ResumeItem;
