import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import MemoryCard from "../src/js/components/MemoryCard";
import apiData from "./testData.json";
import { expect, vi } from "vitest";

describe("<MemoryCard/> component works correctly", () => {
  const props = {
    digimon: apiData[0],
    onClick: vi.fn(() => 0),
  };

  it("click function is not called when click is pressed", async () => {
    const onClick = vi.fn();

    render(<MemoryCard digimon={props.digimon} onClick={props.onClick} />);

    expect(onClick).not.toBeCalled();
  });

  it("click function is called when click is pressed", async () => {
    // // Create new user
    const user = UserEvent.setup();

    render(<MemoryCard digimon={props.digimon} handleClick={props.onClick} />);

    // // Get button then simulate a click
    const button = screen.getByTestId("memory-card");

    // // Click the button
    await user.click(button);

    // // Check if button function has been called
    expect(props.onClick).toHaveBeenCalledOnce();
  });
});
