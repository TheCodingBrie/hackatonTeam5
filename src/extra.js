//   useEffect(() => {
//     Promise.all([getImageUrl, getImageUrl, getImageUrl]).then((values) => {
//       setImgArray(values);
//     });
//   }, []);

//   const getImageUrl = async () => {
//     const searchParam = "Christmas";
//     let newImage = "";
//     try {
//       newImage = await axios.get(
//         `https://loremflickr.com/500/500/${searchParam}`
//       );
//       newImage = newImage.request.responseURL;
//     } catch (error) {
//       newImage = error.message;
//     }
//     return newImage;
//   };

//   async function getImageUrl() {
//     const searchParam = "Christmas";
//     let newImage = "";
//     try {
//       newImage = await axios.get(
//         `https://loremflickr.com/500/500/${searchParam}`
//       );
//       newImage = newImage.request.responseURL;
//     } catch (error) {
//       newImage = error.message;
//     }
//     return newImage;
//   }

//   for (let i = 0; i < 6; i++) {
//     setImgArray(...imgArray, getImageUrl());
//   }

//   function getImageUrl() {
//     const searchParam = "Christmas";
//     axios
//       .get(`https://loremflickr.com/500/500/${searchParam}`)
//       .then((response) => {
//         console.log(response.request.responseURL);
//       });
//   }

//   const tempArray = new Array(6).fill(null).map(() => getImageUrl());

//   const tempArray = new Array(6).fill(null).map(() => {
//     const searchParam = "Christmas";
//     axios
//       .get(`https://loremflickr.com/500/500/${searchParam}`)
//       .then((response) => {
//         console.log(response.request.responseURL);
//         return response.request.responseURL;
//       });
//   });

//   setImgArray(tempArray);

const tArr = new Array(6).fill(null);

const getImageURL = async () => {
  console.log("test");
  let img = "no image";
  let imgParam = "christmas";
  try {
    img = await axios.get(`https://loremflickr.com/500/500/${imgParam}`);
    img = img.request.responseURL;
    console.log(img.request.responseURL);
    return img;
  } catch (error) {
    console.log("no image");
  }
};

tArr.map((element) => {
  element = getImageURL();
  console.log(element);
  return element;
});

console.log(tArr);
