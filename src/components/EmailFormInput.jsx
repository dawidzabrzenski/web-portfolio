function EmailFormInput({ children, name, type, labelText }) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
      <div className="flex w-full gap-4 lg:w-2/4">
        {children}
        <label htmlFor={name}>{labelText}</label>
      </div>
      <input
        className="w-full rounded-lg px-2 py-2 outline-none outline-1 focus:border-light-green focus:outline-light-green"
        name={name}
        id={name}
        type={type}
        required
      />
    </div>
  );
}

export default EmailFormInput;
