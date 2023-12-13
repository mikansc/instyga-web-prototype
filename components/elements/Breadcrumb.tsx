"use client";

import { useSelectedLayoutSegments } from "next/navigation";

const segmentsMap: { [key: string]: string } = {
  dashboard: "Home",
  paths: "Certificações",
  tests: "Avaliações",
};

export const Breadcrumb = () => {
  const segments = useSelectedLayoutSegments();

  return (
    <ol className="breadcrumb">
      {segments.map((segment, index) => {
        const segmentName = segmentsMap[segment] ?? "Detalhes";
        const Component = index === segments.length - 1 ? "li" : "a";
        const mountSegmentUrl = (segment: string) => {
          return `/${segments.slice(0, index + 1).join("/")}`;
        };
        return (
          <Component
            key={index}
            className="breadcrumb-item"
            href={mountSegmentUrl(segment)}
          >
            {segmentName}
          </Component>
        );
      })}
    </ol>
  );
};
