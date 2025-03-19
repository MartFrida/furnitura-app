import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-7xl my-4 mx-2 md:mx-auto lg-8 p-4 bg-neutral-800 rounded-lg shadow-gray-900">{children}</div>;
};

export default Container;