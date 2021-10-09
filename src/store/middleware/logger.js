export const logger = (param) => (state) => (next) => (action) => {
  console.log(
    `it's logger service you run this action`,
    action,
    `and your param is ${param}`
  );

  if (param === "dev") {
    console.log(`dispatch is successfully`);
    next(action);
  } else console.log(`dispatch isn't successfully`);
};
