import { AccountBox } from "../AccountBox";

export const HomePage = () => {
  return (
    <div className="container mx-auto h-100">
      <div className="row h-100 align-items-center justify-content-end">
        <div className="col-4">
          <AccountBox />
        </div>
      </div>
    </div>
  );
};
