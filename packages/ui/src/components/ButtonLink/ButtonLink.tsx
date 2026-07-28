import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./ButtonLink.module.css";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const classes = [styles.buttonLink, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}