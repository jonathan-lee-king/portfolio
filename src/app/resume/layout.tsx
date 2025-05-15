import { type ReactNode } from "react";

export interface ResumeLayoutProps {
  children: ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return children;
}
