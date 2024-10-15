function ContactBtn({ children, name, handleClick, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        onClick={() => handleClick(true)}
        className="flex items-center gap-2 rounded-full border border-[#A8A8A8] bg-[#090909] px-12 py-2 text-main hover:cursor-pointer hover:bg-light-green hover:text-dark"
      >
        {children}
        <p className="h-5">{name}</p>
      </div>
    </a>
  );
}

export default ContactBtn;
