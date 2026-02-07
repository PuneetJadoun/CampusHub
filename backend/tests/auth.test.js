import { jest } from "@jest/globals";

// MOCK EMAIL BEFORE ANY IMPORTS
jest.unstable_mockModule("../src/utils/sendEmail.util.js", () => ({
  default: async () => true
}));

// import after mocking
const request = (await import("supertest")).default;
const app = (await import("../app.js")).default;
const User = (await import("../src/models/user.model.js")).default;

describe("Auth System", () => {

  const testEmail = "test@bennett.edu.in";
  const password = "123456";

  test("should register user and send OTP", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: testEmail,
        password
      });

    expect(res.statusCode).toBe(201);
  });

  test("should not login before verification", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: testEmail,
        password
      });

    expect(res.statusCode).toBe(401);
  });

  test("should verify OTP", async () => {
    const user = await User.findOne({ email: testEmail });

    const res = await request(app)
      .post("/api/auth/verify-otp")
      .send({
        email: testEmail,
        otp: user.verificationToken
      });

    expect(res.statusCode).toBe(200);
  });

  test("should login after verification", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: testEmail,
        password
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

});
