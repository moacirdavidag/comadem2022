const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const background = new Image();
background.src = "./src/images/background.png";
const fotoPessoa = new Image();
const inputFile = document.querySelector("#carregarFoto");
const download = document.querySelector("#download");
const funcoes = document.querySelector("#funcoes");

background.addEventListener("load", () => {
    ctx.drawImage(background, 0, 0);
    ctx.beginPath();
    ctx.arc(537, 1179, 125, 0, 2 * Math.PI, true);
    ctx.clip();
});


inputFile.addEventListener("change", () => {

    const reader = new FileReader();
    const image = inputFile.files[0];

    reader.onloadend = () => {
        fotoPessoa.src = reader.result;
    }

    if(image) {
        fotoPessoa.src = reader.readAsDataURL(image);
        setInterval(() => {
            ctx.drawImage(fotoPessoa, 412, 1053, 250, 250);
            download.href = canvas.toDataURL();
            download.download = "convite_comadem";
        }, 1000)
    } else {
        fotoPessoa.src = "";
    }

})



