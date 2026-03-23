import QueryProvider from "./query.provider";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Providers;
