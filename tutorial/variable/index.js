var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var ion = document.querySelector('.sosmed');
var anch = document.createElement('a');
var sosmed = [{
  icon : ['youtube','facebook','instagram','tiktok','linkedin']
},
{ url : ['https://www.youtube.com/channel/UCHCaq12aWRoy3LD4xqvcgmQ','https://facebook.com/temenngoding','https://instagram.com/temenngoding_id','https://tiktok.com/temenngoding_id','https://www.linkedin.com/in/temenngodingid/']
}
]
var icon = '';
for (i = 0; i < sosmed[0].icon.length; i++){
    icon += `
      <a href="${sosmed[1].url[i]}">
        <ion-icon name="logo-${sosmed[0].icon[i]}"></ion-icon>
      </a>
    `;
    var z = ion.innerHTML = icon
    console.log(z)
}


