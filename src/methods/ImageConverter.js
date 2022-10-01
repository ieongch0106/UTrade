export const URLtoBlob = async (url) => {
    let image;
    try {
     image = await fetch(url)
      .then(res => res.blob())
      .then(blob => URL.createObjectURL(blob))
    } catch (err) {
      console.log(err);
    }
    return image;
}