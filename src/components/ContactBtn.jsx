function ContactBtn({ name }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#A8A8A8] bg-[#090909] px-12 py-2 text-main hover:cursor-pointer">
      <img
        className="h-6 w-6"
        src={`./icons/${name.toLowerCase()}-out.svg`}
        alt=""
      />
      <p className="h-5">{name}</p>
    </div>
  );
}

export default ContactBtn;
