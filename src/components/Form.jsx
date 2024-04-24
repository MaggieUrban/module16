export function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const data = Object.fromEntries(form);

    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user_name">
        Name
        <input type="text" id="user_email" name="user_name" />
      </label>
      <label htmlFor="user_email">
        Email
        <input type="email" id="user_email" name="user_email" />
      </label>
      <input type="submit" />
    </form>
  );
}
