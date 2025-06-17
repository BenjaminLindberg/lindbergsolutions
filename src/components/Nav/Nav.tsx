import { Component, JSX } from "solid-js";

export type NavProps = {} & JSX.HTMLAttributes<HTMLDivElement>;

export const Nav: Component<NavProps> = ({
  class: className = "",
  ...props
}) => {
  return (
    <nav
      class={`w-full flex bg-slate-300 rounded-b-md justify-between p-2 ${className}`}
      {...props}
    >
      <span>BL</span>
      <ul>
        <li>
          <a href="/test">Previous projects</a>
        </li>
      </ul>
    </nav>
  );
};
