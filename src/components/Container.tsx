import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="lg:max-w-4xl xl:max-w-5xl my-4 mx-2 md:mx-4 lg:mx-auto lg-8 p-4 md:p-6 bg-stone-800/90 rounded-lg shadow-gray-900">{children}</div>;
};

export default Container;