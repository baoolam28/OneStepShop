const requireImage = require.context(
  "../assets/images",
  false,
  /\.(png|jpe?g|svg)$/
);

const imageLoader = (imageName) => {
  try {
    return requireImage(`./${imageName}`);
  } catch (err) {
    console.error(`Image ${imageName} not found`, err);
    return null;
  }
};

export default imageLoader;
