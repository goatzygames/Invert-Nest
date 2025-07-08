// blog.js

const Posts = [
  {
    title: {
      et: "Kuidas me ehitasime hamstri kuningriigi",
      en: "How We Built a Hamster Kingdom",
      ru: "Как мы построили королевство для хомяка"
    },
    images: ["https://i.ibb.co/ccCTFHhs/cute-afra.jpg"],
    paragraphs: {
      et: [
        "Tere tulemast meie loosse sellest, kuidas me tavalise akvaariumi muutsime unistuste hamstri kuningriigiks!",
        "Alustasime 40-gallonise akvaariumiga ja valisime hoolikalt ohutu allapanu, peidukohti ja tunneleid.",
        "Rutsile meeldib eriti korkpalk ja tekstuuriga ronimisoks. Teda vaadata on lihtsalt rõõm!"
      ],
      en: [
        "Welcome to the story of how we turned a simple tank into a dreamy hamster kingdom!",
        "We started with a 40-gallon tank and carefully selected safe bedding, hides, and tunnels.",
        "Rutsi especially loves the cork log and textured climbing branch. Watching her zoom around is pure joy!"
      ],
      ru: [
        "Добро пожаловать в рассказ о том, как мы превратили обычный аквариум в королевство хомяка!",
        "Мы начали с 40-галлонного аквариума и тщательно подобрали безопасную подстилку, укрытия и туннели.",
        "Рутси особенно любит пробковое бревно и текстурированную ветку для лазанья. Смотреть, как она носится — одно удовольствие!"
      ]
    }
  },
  {
    title: {
      et: "Vertikaalse rikastamise tähtsus",
      en: "The Importance of Vertical Enrichment",
      ru: "Важность вертикального обогащения"
    },
    images: ["https://i.ibb.co/ccCTFHhs/cute-afra.jpg"],
    paragraphs: {
      et: [
        "Paljud hamstrite kodud unustavad ära vertikaalse ruumi, mis on ronimiseks ja stimuleerimiseks väga oluline.",
        "Me lisasime ronimisoksi, platvorme ja tunneleid, et luua dünaamiline mänguväljak.",
        "Rutsi veedab nüüd rohkem aega avastades ja vähem aega puurist välja kaevates."
      ],
      en: [
        "Many hamster setups forget vertical space, which is vital for climbing and stimulation.",
        "We introduced climbing branches, ledges, and tunnels to create a dynamic playground.",
        "Rutsi now spends more time exploring and less time digging out of boredom."
      ],
      ru: [
        "Многие хомячьи жилища игнорируют вертикальное пространство, которое важно для лазания и стимуляции.",
        "Мы добавили ветки, платформы и туннели, чтобы создать динамичную игровую зону.",
        "Теперь Рутси больше исследует и меньше копает от скуки."
      ]
    }
  },
];

function renderPost() {
  const postIndex = localStorage.getItem("selectedPostIndex");
  const lang = localStorage.getItem("lang") || "et";

  const contentDiv = document.getElementById("post-content");
  const imgDiv = document.getElementById("post-images");
  const titleEl = document.getElementById("post-title");

  // Clear old content
  contentDiv.innerHTML = "";
  imgDiv.innerHTML = "";

  if (postIndex !== null && Posts[postIndex]) {
    const post = Posts[postIndex];

    // Set title
    titleEl.textContent = post.title[lang] || post.title["et"];

    // Set paragraphs
    post.paragraphs[lang].forEach(p => {
      const para = document.createElement("p");
      para.textContent = p;
      contentDiv.appendChild(para);
    });

    // Set images
    post.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.style.marginBottom = "1rem";
      img.style.borderRadius = "12px";
      imgDiv.appendChild(img);
    });
  } else {
    const fallback = document.querySelector(".product-page") || document.body;
    fallback.innerHTML = "<p>Post not found.</p>";
  }
}
document.addEventListener("DOMContentLoaded", renderPost);


