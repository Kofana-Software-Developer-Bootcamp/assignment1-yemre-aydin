var allRegistered=[];

function getFormValues() {
    // burda boyle objeyi olusturup
    let bilgiler = {
      ad: $("#ad").val(),
      soyad: $("#soyad").val(),
      email: $("#email").val(),
      tel: $("#tel").val(),
      dtarih:$("#gun").val()+"/"+$("#ay").val()+"/"+$("#yil").val(),
      
      bolum:$("#bolum").val(),
      yer:$("#yer").val(),
      
    };
    // siteyi gosterebilirim isterseniz ?
    window.alert(
      "Adiniz : " +
        bilgiler.ad +
        "\r\n" +
        "Soyadiniz : " +
        bilgiler.soyad +
        "\r\n" +
        "Mail Adresiniz : " +
        bilgiler.email +
        "\r\n" +
        "Telefonunuz : " +
        bilgiler.tel +
        "\r\n"
    );
    allRegistered.push(bilgiler);
    console.log(allRegistered);
    
  }



/*
// Katılımcılar
let participants = [];

// Kullanıcı Girdileri
const form = document.getElementsByTagName("form")[0];
console.log(form[1]);

let submitButton = document.getElementById("submitbtn");
submitButton.addEventListener("click", AddParticipant);


function Participant(name, surname, email, phone, dateofbirth, gender, department,city,hobies) {
    this.ad = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.dateofbirth = dateofbirth;
    this.gender = gender;
    
    this.department = department;
    this.city=city;
    this.hobies;
}


function katilimciEkle() {
    const participant = new Participant(
        form[0].value,
        form[1].value,
        form[2].value,
        form[3].value,
        form[4].value,
        form[5].value,
        form[6].value,
        form[7].value,
        form[8].value
    );

    participants.push(participant);

    console.log(participants);

}
*/