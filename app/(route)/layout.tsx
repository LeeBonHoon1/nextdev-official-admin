import { PropsWithChildren } from "react";

const RootLayout = async ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default RootLayout;
