import PathDetailsPage from "@/components/pages/PathDetailsPage";

const PathDetails = ({
  params,
}: {
  params: {
    id: string;
  };
}) => <PathDetailsPage id={params.id} />;

export default PathDetails;
