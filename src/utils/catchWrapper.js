export const catchWrapper = (callback, moduleName) => {
  try {
    callback();
  } catch(e) {
    console.log(`Something went wrong in ${moduleName}`)
    return res.status(500).json({ message: `Something went wrong in ${moduleName}` });
  }
}