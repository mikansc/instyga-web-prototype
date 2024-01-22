"use client";

import Link from "next/link";
import * as React from "react";
import { useEffect } from "react";

declare global {
  interface Window {
    bootstrap: any;
  }
}

const renderBadgeTooltipProperties = (title: string) => {
  if (!title) return {};
  return {
    "data-bs-toggle": "tooltip",
    "data-bs-placement": "bottom",
    "data-bs-title": title,
  };
};

type BadgeProps = {
  children: React.ReactNode;
  tip?: string;
  color?: "primary" | "secondary";
  link?: string;
};

export const Badge = (props: BadgeProps) => {
  const elRef = React.useRef(null);

  const { children, tip, color = "primary", link } = props;

  useEffect(() => {
    if (!elRef.current) return;
    if (!window.bootstrap) return;
    const tooltip = new window.bootstrap.Tooltip(elRef.current);
    return () => tooltip.dispose();
  });

  const hasLink = Boolean(link);
  const BadgeComponent = hasLink ? Link : "span";

  return (
    <BadgeComponent
      ref={elRef}
      href={link ?? ""}
      className={`badge bg-${color} me-1 link-underline link-underline-opacity-0`}
      {...renderBadgeTooltipProperties(tip ?? "")}
    >
      {children}
    </BadgeComponent>
  );
};
