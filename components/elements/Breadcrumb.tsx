"use client";

import { useSelectedLayoutSegments } from "next/navigation";

const segmentsMap: { [key: string]: string } = {
  dashboard: "Home",
  paths: "Certificações",
  tests: "Avaliações",
};

export const Breadcrumb = () => {
  const segments = useSelectedLayoutSegments();
  const isRootPage = segments.length <= 1;

  if (isRootPage) return null; // se estiver na dashboard

  return (
    <ol className="breadcrumb">
      {segments.map((segment, index) => {
        const segmentName = segmentsMap[segment] ?? "Detalhes";
        const BreadCrumbItem = index === segments.length - 1 ? "li" : "a";
        const mountSegmentUrl = () => {
          return `/${segments.slice(0, index + 1).join("/")}`;
        };

        return (
          <BreadCrumbItem
            key={index}
            className="breadcrumb-item"
            href={mountSegmentUrl()}
          >
            {segmentName}
          </BreadCrumbItem>
        );
      })}
    </ol>
  );
};
