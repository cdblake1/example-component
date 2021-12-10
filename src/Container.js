import { CSS } from "./CSSConstants";

export default function Container({ children, ...props }) {
  return <div className="container">{children}</div>;
}
