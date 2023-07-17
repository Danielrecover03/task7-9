
class Testimonial {
    #quote = ""
    #image = ""

    constructor(satu, dua) {
        this.#quote = satu
        this.#image = dua
    }

    get dua() {
        return this.#image
    }

    get satu() {
        return this.#quote
    }

    get tiga() {
        throw new Error('harus ada namanya')
    }

    get testimonialAja() {
        return `<div class="testimonial1" id="testimonial1">
            <img src="${this.dua}">
            <p class="quote">${this.satu}</p>
            <p class="user">- ${this.tiga}</p>
            </div>
            `
    }
}

class tigaTestimonial extends Testimonial {
    #user = ""

    constructor(tiga, satu, dua) {
        super (satu, dua)
        this.#user = tiga
    }

    get tiga() {
        return "user : " + this.#user
    }
}

class empatTestimonial extends Testimonial {
    #company = ""

    constructor(empat, satu, dua) {
        super (satu, dua)
        this.#company = empat
    }

    // harus "tiga", karena diatas ada new error, kalo new error diapus, dibikin bebas tetep bisa jadi //
    get tiga() {
        return "company : " + this.#company
    }
}

const testimonialPertama = new tigaTestimonial("Konten 1", "I Believe God's Plan ", "https://media.istockphoto.com/id/859510774/id/foto/harimau.jpg?s=2048x2048&w=is&k=20&c=4RLiZm5GkUpq1TXvdLE1MfgrzsP9AUCVS9iB2AXu1YE=")

const testimonialKedua = new tigaTestimonial("KOnten 2", "I Believe God's Plan", "https://media.istockphoto.com/id/869175050/id/foto/potret-singa-betina.jpg?s=2048x2048&w=is&k=20&c=T8Bu8AIA732VBq2F_aaYilZxtnLldakVPG7ZbRzgCiU=")

const testimonialKetiga = new empatTestimonial("KOnten 3", "I Believe God's Plan", "https://media.istockphoto.com/id/626464158/id/foto/kucing-dengan-mulut-terbuka.jpg?s=2048x2048&w=is&k=20&c=od7o_d8UCAhO3RUXnJytbCjQR4ZVvjg2_awgJglTBPA=")

let testimonialPenampungan = [testimonialPertama, testimonialKedua, testimonialKetiga]

let testimonialAja = ""

for (let i = 0; i < testimonialPenampungan.length; i++) {
    testimonialAja += testimonialPenampungan[i].testimonialAja
}

document.getElementById("testimonial").innerHTML = testimonialAja   