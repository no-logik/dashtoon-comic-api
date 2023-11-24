async function query(data) {
  try {
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          Accept: "image/png",
          Authorization:
            "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    const imageURL = URL.createObjectURL(result);
    return imageURL;
  } catch (error) {
    alert("Error in fetching image: ", error);
    console.log("Error in fetching image: ", error);
    return "error";
  }
}

export default query;

// query({"inputs": "Astronaut riding a horse"}).then((response) => {
// 	// Use image
// });
