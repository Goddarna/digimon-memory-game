import { render, screen } from "@testing-library/react";

import App from "../src/js/App";

describe("App component", () => {
  it("renders app heading properly", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toHaveTextContent(
      /Digimon Memory Game/i
    );
  });
});
