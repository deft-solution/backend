const HttpCode = {
  BadRequest: 400,
  Unauthorized: 401,
  Unauthenticated: 403,
  ForbiddenError: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  EntityTooLarge: 413,
  InternalServerError: 500,
  ValidationError: 422,
};

module.exports = HttpCode;
