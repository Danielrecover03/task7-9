
// class Testimonial {
//     #quote = ""
//     #image = ""

//     constructor(satu, dua) {
//         this.#quote = satu
//         this.#image = dua
//     }

//     get dua() {
//         return this.#image
//     }

//     get satu() {
//         return this.#quote
//     }

//     get tiga() {
//         throw new Error('harus ada namanya')
//     }

//     get testimonialAja() {
//         return `<div class="testimonial1" id="testimonial1">
//             <img src="${this.dua}">
//             <p class="quote">${this.satu}</p>
//             <p class="user">- ${this.tiga}</p>
//             </div>
//             `
//     }
// }

// class tigaTestimonial extends Testimonial {
//     #user = ""

//     constructor(tiga, satu, dua) {
//         super (satu, dua)
//         this.#user = tiga
//     }

//     get tiga() {
//         return "user : " + this.#user
//     }
// }

// class empatTestimonial extends Testimonial {
//     #company = ""

//     constructor(empat, satu, dua) {
//         super (satu, dua)
//         this.#company = empat
//     }

//     // harus "tiga", karena diatas ada new error, kalo new error diapus, dibikin bebas tetep bisa jadi //
//     get tiga() {
//         return "company : " + this.#company
//     }
// }

// const testimonialPertama = new tigaTestimonial("Konten 1", "I Believe God's Plan ", "https://media.istockphoto.com/id/859510774/id/foto/harimau.jpg?s=2048x2048&w=is&k=20&c=4RLiZm5GkUpq1TXvdLE1MfgrzsP9AUCVS9iB2AXu1YE=")

// const testimonialKedua = new tigaTestimonial("KOnten 2", "I Believe God's Plan", "https://media.istockphoto.com/id/869175050/id/foto/potret-singa-betina.jpg?s=2048x2048&w=is&k=20&c=T8Bu8AIA732VBq2F_aaYilZxtnLldakVPG7ZbRzgCiU=")

// const testimonialKetiga = new empatTestimonial("KOnten 3", "I Believe God's Plan", "https://media.istockphoto.com/id/626464158/id/foto/kucing-dengan-mulut-terbuka.jpg?s=2048x2048&w=is&k=20&c=od7o_d8UCAhO3RUXnJytbCjQR4ZVvjg2_awgJglTBPA=")

// let testimonialPenampungan = [testimonialPertama, testimonialKedua, testimonialKetiga]

// let testimonialAja = ""

// for (let i = 0; i < testimonialPenampungan.length; i++) {
//     testimonialAja += testimonialPenampungan[i].testimonialAja
// }

// document.getElementById("testimonial").innerHTML = testimonialAja  
/*deklari varialbe berupa array kosong*/
const testimonialData = [
    {
      /*properti*/
      author : "Ronaldo in Sporting Lisbon",
      quote : "I Believe God's Plan",
      image : "https://pbs.twimg.com/media/DtkxhSsVAAA-MrT.jpg:large",
      rating : 1,
    },
    {
      author : "Ronaldo In MU",
      quote : "I Believe God's Plan",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlKTC8GZ3RpiAoDVAIfXtpm0PxmumdfHLqYg&usqp=CAU",
      rating : 2,
    },
    {
      author : "Ronaldo In Madrid",
      quote : "I Believe God's Plan",
      image : "https://asset.indosport.com/article/image/q/80/201834/ronaldo-169.jpg?w=750&h=423",
      rating : 3,
    },
    {
      author : "Ronaldo In Juventus",
      quote : "I Believe God's Plan",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQN7ZtlKJVF02iXXfP4u4PG20xj3wN84ABA&usqp=CAU",
      rating : 4,
    },
    {
      author : "Ronaldo in Al-Nasr",
      quote : "I Believe God's Plan",
      image : "https://i2-prod.mirror.co.uk/incoming/article29275235.ece/ALTERNATES/s1200c/0_GettyImages-1464729515.jpg",
      rating : 5,
    },

  ];
  
  function allTestimonials() {
    let testimonialHTML = "";
  
    testimonialData.forEach(function(item) {
      testimonialHTML += `
      <div class="tetimonial">
        <img src="${item.image}">
        <p class="content">${item.quote}</p>
        <p class="author">-${item.author}</p>
        <p class="author">${item.rating}<i class="fa-solid fa-star" style="color: #f2be22;"></i></p>
      </div>
      `;
    })
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }
  
  allTestimonials();
  
  function filterTestimonials(rating) {
    let testimonialHTML = "";
  
    const testimonialFiltered = testimonialData.filter(function(item) {
      return item.rating === rating;
    });
  
    console.log(testimonialFiltered);
  
    if (testimonialFiltered.length === 0) {
      testimonialHTML += ``;
    } else {
      testimonialFiltered.forEach(function(item){
        testimonialHTML += `
        <div class="tetimonial">
        <img src="${item.image}">
        <p class="content">${item.quote}</p>
        <p class="author">-${item.author}</p>
        <p class="author">${item.rating} <i class="fa-solid fa-star" style="color: #f2be22;"></i></p>
      </div>
        `;
      })
    }
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }