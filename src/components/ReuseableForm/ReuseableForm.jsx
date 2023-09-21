const ReuseableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {

  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    handleSubmit(data)
  };
  return (
    <div>
      <form onSubmit={handleLocalSubmit}>
        <h2>{formTitle}</h2>
        {children}
        <input type="text" name="name" placeholder="Name" /> <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReuseableForm;
