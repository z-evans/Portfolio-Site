import { FunctionComponent, PropsWithChildren } from "react";
import { LoadSpinner } from "../styles/component/Loader";

interface LoaderProps extends PropsWithChildren {
  isLoading: boolean;
}

const Loader: FunctionComponent<LoaderProps> = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
        <LoadSpinner>
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </LoadSpinner>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
