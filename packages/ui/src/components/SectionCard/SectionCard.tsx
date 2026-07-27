import type { ElementType, ReactNode } from 'react';
import styles from "./SectionCard.module.css";

type SectionCardProps = {
  title: string;
  children: ReactNode;
  as?: ElementType;
};

export function SectionCard({ title, children, as: Component = 'section' }: SectionCardProps) {
  return (
    <Component className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.body}>{children}</div>
    </Component>
  );
}