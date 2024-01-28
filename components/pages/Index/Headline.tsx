import { Container } from "@/components/atoms/Container";

export const Headline = () => {
  return (
    <div className="flex items-center justify-start">
      <Container>
        <span className="block text-white text-6xl font-extralight">
          pratique, comprove
        </span>
        <span className="block text-white text-9xl font-semibold">
          impressi<span className="text-blue-600">o</span>ne
        </span>
      </Container>
    </div>
  );
};
