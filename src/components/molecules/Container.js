import classNames from "classnames";

export default function Container({ children, className }) {
  return (
    <div className={classNames("container mx-auto", className)}>{children}</div>
  );
}
