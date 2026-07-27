import type { ElementType, ReactNode } from 'react';

type SectionCardProps = {
  title: string;
  children: ReactNode;
  as?: ElementType;
};

export function SectionCard({ title, children, as: Component = 'section' }: SectionCardProps) {
  return (
    <Component className="panel">
      <h2>{title}</h2>
      {children}
    </Component>
  );
}