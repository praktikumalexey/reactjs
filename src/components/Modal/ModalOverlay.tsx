import React from "react";
import ReactDOM from "react-dom";

export const ModalOverlay = ({
  children,
  className = "root-portal",
}: {
  children: React.ReactNode;
  className: string;
}): React.ReactPortal => {
  const [container] = React.useState(() => {
    // This will be executed only on the initial render
    // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    return document.createElement("div");
  });

  React.useEffect(() => {
    container.classList.add(className);
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};
