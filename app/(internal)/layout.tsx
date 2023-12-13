import { Breadcrumb } from "@/components/elements/Breadcrumb";
import { Container } from "@/components/templates/Container";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div
        className="w-100"
        style={{
          paddingTop: "80px",
        }}
      >
        <Breadcrumb />
        {children}
      </div>
    </Container>
  );
};

export default Layout;
