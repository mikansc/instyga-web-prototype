export const SectionTitleBlock = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="mt-3 mb-5">
    <h2 className="display-6 mb-2">{title}</h2>
    <p className="lead">{subtitle}</p>
  </div>
);
