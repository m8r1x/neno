import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Setup enzyme
configure({ adapter: new Adapter() });

// Mock the electron module (required for logging)
jest.mock("electron", () => ({
  remote: {
    getGlobal: jest.fn()
  }
}));
