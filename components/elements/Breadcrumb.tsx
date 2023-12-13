"use client";

import { useSelectedLayoutSegments } from "next/navigation";

const segmentsMap: { [key: string]: string } = {
  dashboard: "Home",
  "all-paths": "Certificações",
  "all-tests": "Avaliações",
};

export const Breadcrumb = () => {
  const segments = useSelectedLayoutSegments();
  console.log(segments);

  return (
    <ol className="breadcrumb">
      {segments.map((segment, index) => {
        const Component = index === segments.length - 1 ? "li" : "a";

        return (
          <Component
            key={index}
            className="breadcrumb-item"
            // href={index === 0 ? "/" : segments.slice(0, index + 1).join("/")}
            href={index === 0 ? `/${segment}` : segment}
          >
            {segmentsMap[segment]}
          </Component>
        );
      })}
    </ol>
  );
};
