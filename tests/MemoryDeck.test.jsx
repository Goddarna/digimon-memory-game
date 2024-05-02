import { screen, render, waitFor } from "@testing-library/react";
import MemoryDeck from "../src/js/components/MemoryDeck";
import apiData from "./testData.json";

// Check if API is loaded correctly
describe("component works correctly", () => {
  // Make sure that useEffects hook fetches api data and saves it
  it("loads the api data and generates list of digimon", async () => {
    const props = {
      url: "https://digimon-api.vercel.app/api/digimon",
      setScore: () => {},
    };

    const mockResponse = [apiData];

    // Mock the fetch API
    // Any fetch is returned with this data
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Render component
    render(<MemoryDeck url={props.url} setScore={props.setScore} />);

    // Check if child components are rendered
    await waitFor(
      () => {
        // Check if the correct number of child components are rendered
        const childComponents = screen.queryAllByTestId("memory-card");
        expect(childComponents.length).toBe(mockResponse.length);

        // // Check if each child component is rendered with the correct data
        mockResponse.forEach((item, index) => {
          expect(childComponents[index]).toHaveTextContent(item.name);
        });
      },
      { timeout: 5000 }
    );
  });
});
