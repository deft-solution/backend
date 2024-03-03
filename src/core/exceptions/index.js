const HttpError = require("./HttpError");
const HttpCode = require("../enums/HttpCode");

class BadRequestError extends HttpError {
  constructor(message, errorCode, payload) {
    super("BAD_REQUEST", HttpCode.BadRequest, message, errorCode, payload);
  }
}

class MissingParamError extends HttpError {
  constructor(param, errorCode) {
    super(
      "BAD_REQUEST",
      HttpCode.BadRequest,
      `Missing request param '${param}'`,
      errorCode,
    );
  }
}

class NotFoundError extends HttpError {
  constructor(message, errorCode) {
    super("NOT_FOUND", HttpCode.NotFound, message, errorCode);
  }
}

class InternalServerError extends HttpError {
  constructor(message, errorCode) {
    super(
      "INTERNAL_SERVER_ERROR",
      HttpCode.InternalServerError,
      message,
      errorCode,
    );
  }
}

module.exports = {
  BadRequestError,
  MissingParamError,
  NotFoundError,
  HttpError,
  InternalServerError,
};
