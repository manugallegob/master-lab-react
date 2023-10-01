import React from "react";

interface Props {
  membersPerPage: number;
  currentPage: number;
  totalMembers: number;
  setCurrentPage: (currentPage: number) => void;
}

export const Pagination: React.FC<Props> = (props) => {
  const [disabledBtnPrev, setDisabledBtnPrev] = React.useState(false);
  const [disabledBtnNext, setDisabledBtnNext] = React.useState(false);
  const { membersPerPage, currentPage, setCurrentPage, totalMembers } = props;

  const pageNumbers: number[] = [];
  const totalPages: number = Math.ceil(totalMembers / membersPerPage);

  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  const onPreviusPage = () => setCurrentPage(currentPage - 1);
  const onNextPage = () => setCurrentPage(currentPage + 1);
  const onSpecificPage = (page: number) => setCurrentPage(page);

  React.useEffect(() => {
    currentPage === 1 ? setDisabledBtnPrev(true) : setDisabledBtnPrev(false);
    currentPage >= pageNumbers.length
      ? setDisabledBtnNext(true)
      : setDisabledBtnNext(false);
  }, [currentPage]);

  return (
    <>
      <nav className="pagination is-centered">
        <button
          className={`pagination-previous ${disabledBtnPrev ? "is-disabled" : ""}`}
          disabled={disabledBtnPrev}
          onClick={onPreviusPage}
        >
          Anterior
        </button>
        <button
          className={`pagination-next ${disabledBtnNext ? "is-disabled" : ""} `}
          disabled={disabledBtnNext}
          onClick={onNextPage}
        >
          Siguiente
        </button>
        <ul className="pagination-list">
          {pageNumbers.map((numPage) => (
            <li key={numPage}>
              <a
                onClick={() => onSpecificPage(numPage)}
                className={`pagination-link ${
                  numPage === currentPage ? "is-current" : ""
                }`}
              >
                {numPage}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
