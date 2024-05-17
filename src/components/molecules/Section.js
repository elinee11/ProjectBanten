import classNames from "classnames";

export default function Section({ id, children, className, isTop }) {
  return (
    <section
      id={id}
      className={classNames(
        {
          "pt-16 pb-32": isTop === true,
          "py-32": isTop === undefined,
        },
        className
      )}
    >
      {children}
    </section>
  );
}
