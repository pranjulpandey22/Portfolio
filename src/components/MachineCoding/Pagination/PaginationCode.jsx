const PaginationCode = ({
  currentPage,
  handlePrevious,
  handleNext,
  totalPages,
  handleClick,
}) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          ⬅️
        </button>

        {[...Array(totalPages).keys()].map((ele) => (
          <span
            key={ele}
            onClick={() => handleClick(ele)}
            className={`page-no ${currentPage === ele ? "active" : ""}`}
          >
            {ele + 1}
          </span>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          ➡️
        </button>
      </div>
    </>
  );
};

export default PaginationCode;