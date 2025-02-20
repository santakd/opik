import { logger } from "@/utils/logger";
import { Opik } from "opik";
import path from "path";
import { MockInstance } from "vitest";

describe("Opik client batching", () => {
  let loggerErrorSpy: MockInstance<typeof logger.error>;
  const originalEnvironmentVariables = { ...process.env };

  beforeEach(() => {
    loggerErrorSpy = vi.spyOn(logger, "error");
  });

  afterEach(() => {
    process.env = { ...originalEnvironmentVariables };
    loggerErrorSpy.mockRestore();
  });

  it("should throw an error if the host is cloud and the API key is not set", async () => {
    process.env.OPIK_URL_OVERRIDE = "https://www.comet.com/api";

    expect(() => {
      new Opik();
    }).toThrow("OPIK_API_KEY is not set");
  });

  it("should throw an error if the host is cloud and workspace is not set", async () => {
    process.env.OPIK_URL_OVERRIDE = "https://www.comet.com/api";
    process.env.OPIK_API_KEY = "test";

    expect(() => {
      new Opik();
    }).toThrow("OPIK_WORKSPACE is not set");
  });

  it("should not throw an error if everything is set", async () => {
    process.env.OPIK_URL_OVERRIDE = "https://www.comet.com/api";
    process.env.OPIK_API_KEY = "test";
    process.env.OPIK_WORKSPACE = "test";

    expect(() => {
      new Opik();
    }).not.toThrow();
  });

  it("should load the config from the file", async () => {
    process.env.OPIK_CONFIG_PATH = path.resolve(
      __dirname,
      "./examples/valid-opik-config.ini"
    );

    const opik = new Opik();

    expect(opik.config.apiUrl).toBe("https://www.comet.com/api");
    expect(opik.config.apiKey).toBe("test");
    expect(opik.config.workspaceName).toBe("test");
    expect(opik.config.projectName).toBe("test");
  });

  it("should being able to override config values from the environment variables + explicit config", async () => {
    process.env.OPIK_CONFIG_PATH = path.resolve(
      __dirname,
      "./examples/partial-opik-config.ini"
    );
    process.env.OPIK_API_KEY = "api-key-override";

    const opik = new Opik({
      workspaceName: "workspace-override",
    });

    // Configuration from file
    expect(opik.config.apiUrl).toBe("https://www.comet.com/api");
    // Override from environment variables
    expect(opik.config.apiKey).toBe("api-key-override");
    // Override from explicit config
    expect(opik.config.workspaceName).toBe("workspace-override");
    // Default project name
    expect(opik.config.projectName).toBe("Default Project");
  });

  it("should throw an error if the config is not valid from the file (only API url, missing API key)", async () => {
    process.env.OPIK_CONFIG_PATH = path.resolve(
      __dirname,
      "./examples/invalid-opik-config.ini"
    );

    expect(() => {
      new Opik();
    }).toThrow("OPIK_API_KEY is not set");
  });
});
