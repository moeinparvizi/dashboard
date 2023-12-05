const AddProductPage = () => {
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
          placeholder="title"
          name="title"
          required
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <select
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
          name="cat"
          id="cat"
        >
          <option
            className="capitalize"
            value="general"
            disabled
          >
            choose a category
          </option>
          <option className="capitalize" value="kitchen">
            kitchen
          </option>
          <option className="capitalize" value="phone">
            phone
          </option>
          <option className="capitalize" value="computer">
            computer
          </option>
        </select>
        <input
          type="number"
          id="price"
          placeholder="price"
          name="price"
          required
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          required
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <input
          type="text"
          id="color"
          placeholder="color"
          name="color"
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <input
          type="text"
          placeholder="size"
          id="size"
          name="size"
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
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

export default AddProductPage
