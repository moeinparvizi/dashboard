const AddUserPage = () => {
  return (
    <div className="p-5 w-full bg-bgDark rounded-lg mt-5">
      <form
        action=""
        className="
        flex
        flex-wrap
        justify-between
      "
      >
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          name="price"
          required
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <input
          type="number"
          placeholder="phone"
          name="phone"
          required
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          name="color"
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <select
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
          name="cat"
          id="cat"
        >
          <option className="capitalize" value="general">
            is admin?
          </option>
          <option className="capitalize" value="phone">
            yes
          </option>
          <option className="capitalize" value="computer">
            no
          </option>
        </select>
        <select
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
          name="cat"
          id="cat"
        >
          <option className="capitalize" value="general">
            is active?
          </option>
          <option className="capitalize" value="kitchen">
            yes
          </option>
          <option className="capitalize" value="phone">
            no
          </option>
        </select>
        <textarea
          required
          name="address"
          id="address"
          rows="11"
          placeholder="Description"
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-full"
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-md -none transition-all bg-accent hover:bg-primary p-5"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddUserPage
