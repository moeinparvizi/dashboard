const Pagination = () => {
  return (
    <div className="w-full flex justify-between items-center mt-3">
      <button
        className="capitalize transition-all hover:bg-accent rounded-md p-3 bg-primary opacity-75"
        disabled
      >
        previous
      </button>
      <button className="capitalize transition-all hover:bg-accent rounded-md p-3 bg-primary">
        next
      </button>
    </div>
  )
}

export default Pagination
