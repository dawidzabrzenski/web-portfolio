import { HiOutlineChat, HiOutlineMail } from "react-icons/hi";
import { Resend } from "resend";

const resend = new Resend("re_Aiv9WtLp_QJ5JXgpPSbxm7opYjbENWydN");

function EmailForm() {
  function handleSubmit(e) {
    e.preventDefault();

    (async function () {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["delivered@resend.dev"],
        subject: "Hello World",
        html: "<strong>It works!</strong>",
      });

      if (error) {
        return console.error({ error });
      }

      console.log({ data });
    })();
  }

  return (
    <div className="absolute top-0 z-50 flex h-full w-full items-center justify-center rounded-lg bg-stone-700/20 backdrop-blur-sm">
      <div className="flex h-2/3 w-2/4 flex-col gap-6 bg-dark px-12 py-4">
        <h3 className="text-gradient text-center text-3xl">
          Send me an E-mail
        </h3>
        <form
          id="email"
          className="flex h-full flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex w-1/4 gap-4">
              <HiOutlineMail className="size-6 text-stone-200" />
              <p>Your contact E-mail</p>
            </div>
            <input className="w-full rounded-lg px-2 py-2 outline-none outline-1 focus:border-light-green focus:outline-light-green" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex w-1/4 gap-4">
              <HiOutlineChat className="size-6 text-stone-200" />
              <p>Mail Topic</p>
            </div>
            <input className="w-full rounded-lg px-2 py-2 outline-none outline-1 focus:border-light-green focus:outline-light-green" />
          </div>
          <textarea
            form="email"
            className="h-full w-full resize-none rounded-lg px-2 py-2 outline-none outline-1 focus:border-light-green focus:outline-light-green"
          ></textarea>
          <button className="w-fit rounded-lg bg-stone-700 px-12 py-4">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailForm;
