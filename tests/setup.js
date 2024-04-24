import { expect, afterEach, vi } from "vitest";

// import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
// import createFetchMock from "vitest-fetch-mock";

// const fetchMock = createFetchMock(vi);
// fetchMock.enableMocks();
expect.extend(matchers);

// Cleanups are already peformed automatically byt eh task runner
// afterEach(() => {
//   cleanup();
// });
