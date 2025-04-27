import styled from "@emotion/styled";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";

interface PaginationProps extends PropsWithChildren {
  count: number;
  limit: number;
  current: number;
  onChange: (n: number) => void;
}

const BuildItems = (
  pages: number,
  current: number,
  onChange: (n: number) => void
) => {
  let start = current <= 2 ? 1 : current === pages ? current - 2 : current - 1;
  let end = start + 2 > pages ? pages : start + 2;
  let items: ReactNode[] = [];
  items.push(
    <div
      onClick={() => onChange(current - 1 <= 0 ? 1 : current - 1)}
      className={`pagination-item`}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
  for (let i = start; i <= end; i++) {
    items.push(
      <div
        onClick={() => onChange(i)}
        className={`pagination-item ${i === current ? "current" : ""}`}
      >
        {i}
      </div>
    );
  }
  items.push(
    <div
      onClick={() => onChange(current + 1 > end ? end : current + 1)}
      className={`pagination-item`}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );

  return <>{...items}</>;
};

const Pagination: FunctionComponent<PaginationProps> = ({
  count,
  limit,
  current,
  onChange,
}) => {
  const pages = Math.ceil(count / limit);
  return (
    <StyledPagination>
      <div>{BuildItems(pages, current, onChange)}</div>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  margin: auto;
  > div {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
  .pagination-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wintergreen-dream);
    background: var(--light-mint-cream);
    border: 1px var(--wintergreen-dream) solid;
    width: 3em;
    height: 3em;
    user-select: none;
  }
  .current {
    color: var(--light-mint-cream);
    background: var(--wintergreen-dream);
    border: 1px var(--wintergreen-dream) solid;
  }
`;

export default Pagination;
