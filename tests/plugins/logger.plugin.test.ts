import {
  buildLogger,
  logger as winstonLogger,
} from "../../src/plugins/logger.plugin";

describe("Logger plugin", () => {
  test("buildLogger should have log and error", () => {
    const service = "test";
    const logger = buildLogger(service);
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("buildLogger should have log and error", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const service = "test";
    const message = "message";
    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message,
        service,
      })
    );
  });
});
