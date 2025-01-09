const args = process.argv.slice(0);

const sleep = async (time = 1000) => {
  if (args.includes("--time") && typeof Number(args[3]) === "number") {
    time = Number(args[3]);
  }
  return await new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
};

export default sleep;
