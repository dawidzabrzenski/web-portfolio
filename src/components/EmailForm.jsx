import { HiOutlineMail } from "react-icons/hi";

function EmailForm() {
  return (
    <div className="absolute top-0 z-50 flex h-full w-full items-center justify-center rounded-lg bg-stone-700/20 backdrop-blur-sm">
      <div className="flex h-3/4 w-2/4 flex-col gap-6 bg-dark px-12 py-4">
        <h3 className="text-gradient text-center text-3xl">
          Send me an E-mail
        </h3>
        <form className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <HiOutlineMail className="size-6 text-stone-200" />
            <input className="w-2/3 rounded-lg px-2 py-2 focus:border" />
          </div>
          <div className="flex items-center gap-4">
            <HiOutlineMail className="size-6 text-stone-200" />
            <input className="w-2/3 rounded-lg px-2 py-2 focus:border" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailForm;
