const imageUrls = [
    "./Image/image1.png",
    "./Image/image2.png",
    "./Image/image3.png",
    "./Image/image4.png",
    "./Image/image5.png",
    "./Image/day1.png",
    "./Image/day2.png",
    "./Image/day3.png",
    "./Image/day4.png",
    "./Image/day5.png",
    
  ];
  
  function createImageGallery(images) {
    const imageGrid = document.getElementById("imageGrid");
  
    images.forEach((imageUrl) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Image";
      imageGrid.appendChild(img);
    });
  }
  
  createImageGallery(imageUrls);
  