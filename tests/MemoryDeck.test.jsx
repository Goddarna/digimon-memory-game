import {
  screen,
  render,
  renderHook,
  waitFor,
  act,
} from "@testing-library/react";
import MemoryDeck from "../src/js/components/MemoryDeck";

// Mock the fetch API
// Any fetch is returned with this data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ name: "Digmon" }, { name: "Agumon" }]),
  })
);

// Check if API is loaded correctly
describe("component works coerectly", () => {
  // Make sure that useEffects hook fetches api data and saves it
  it("loads the api data and generates a <MemoryCard /> component", async () => {
    let props = {
      url: "https://digimon-api.vercel.app/api/digimon",
      setScore: () => {},
    };

    render(<MemoryDeck url={props.url} setScore={props.setScore} />);

    // Get instance of rendered component
    const instance = container.firstChild;

    // Check initial state
    expect(instance).toHaveProperty("state.digimon", []);

    // // We have some async code in useEffect so use Waitfor
    // await waitFor(
    //   () => {
    //     console.log("ha", results.result.current);
    //     expect(results.current.digimon).toEqual([{ name: "Agumon" }]);
    //   }
    // );
  });
});

// Check if digimon array is shuffled
