const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
  
    xhr.open("GET", "https://api.npoint.io/b70c5c1e86834bb3f99f", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error("Error loading data"));
      }
    };
  
    xhr.onerror = function () {
      reject(new Error("Network error"));
    };
    
    xhr.send();
  });
  
  promise
    .then((response) => {
      console.log(response);
      let testimonialHTML = "";
  
      response.forEach((card) => {
        testimonialHTML += `
        <div class="testimonial">
          <img src="${card.image}">
          <p class="content">${card.author}</p>
          <p class="author">-${card.quote}</p>
          <p class="author">${card.rating}<i class="fa-solid fa-star" style="color: #f2be22;"></i></p>
        </div>
        `;
      });
  
      document.getElementById("testimonials").innerHTML = testimonialHTML;
    })
    .catch((error) => {
      console.log(error);
    });
  
  async function getData() {
    try {
      const response = await promise;
      console.log(response);
  
      let testimonialHTML = "";
  
      response.forEach((card) => {
        testimonialHTML += `
        <div class="testimonial">
          <img src="${card.image}">
          <p class="content">${card.author}</p>
          <p class="author">-${card.quote}</p>
          <p class="author">${card.rating}<i class="fa-solid fa-star" style="color: #f2be22;"></i></p>
        </div>
        `;
      });
  
      document.getElementById("testimonials").innerHTML = testimonialHTML;
    } catch (error) {
      console.log(error);
    }
  }
  