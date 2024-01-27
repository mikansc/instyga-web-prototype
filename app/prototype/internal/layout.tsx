import { Container } from "@/components/atoms/Container/Container";
import { Breadcrumb } from "@/components/elements/Breadcrumb";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div
        className="w-100"
        style={{
          paddingTop: "80px",
          paddingBottom: "110px",
        }}
      >
        <Breadcrumb />
        {children}
      </div>
    </Container>
  );
};

export default Layout;
