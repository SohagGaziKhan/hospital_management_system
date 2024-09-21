export const jsontoken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  // Determine the cookie name based on the user's role
  let cookieName;
  if (user.role === "Admin") {
    cookieName = "adminToken";
  } else if (user.role === "Doctor") {
    cookieName = "doctorToken";
  } else if (user.role === "Patient") {
    cookieName = "patientToken";
  } else {
    throw new Error("Invalid user role"); // Handle unexpected roles
  }

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
