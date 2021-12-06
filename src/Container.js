import { CSS } from "./CSSConstants";

export default function Container({ children, ...props }) {
  return (
    <div
      style={{
        boxShadow: CSS["boxShadow"][props.shadow || "small"],
      }}
    >
      {children}
    </div>
  );
}
