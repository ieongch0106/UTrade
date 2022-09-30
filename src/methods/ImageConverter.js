export const URLtoBlob = async (url) => {
    let blob;
    try {
      blob = await fetch(url)
      .then(res => res.blob())
      .then(blob => URL.createObjectURL(blob))
    } catch (err) {
      console.log(err);
    }
    return blob;
}